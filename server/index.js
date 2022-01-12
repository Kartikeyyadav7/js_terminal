const { createServer } = require("http");
const { Server } = require("socket.io");
const os = require("os");
const pty = require("node-pty");

const httpServer = createServer((req, res) => {
	res.write("terminal server started");
	res.end();
});

const port = 8080;

httpServer.listen(port, () => {
	console.log("server listening on port", port);

	const io = new Server(httpServer, {
		cors: {
			origin: ["http://localhost:1234", "https://js-terminal.netlify.app/"],
		},
	});

	console.log("Socket IO started, waiting for connection");

	io.on("connection", (socket) => {
		console.log("Connected to client", socket.id);

		socket.on("disconnect", () => {
			console.log("Disconnected Socket: ", socket.id);
		});
		const shell = os.platform() === "win32" ? "powershell.exe" : "bash";

		const ptyProcess = pty.spawn(shell, [], {
			name: "xterm-color",
			cols: 80,
			rows: 30,
			cwd: process.env.HOME,
			env: process.env,
		});

		ptyProcess.onData((e) => {
			console.log("I am serving the output now");
			socket.emit("output", e);
		});

		socket.on("input", (input) => {
			console.log("I am getting the input now");
			ptyProcess.write(input);
		});
	});
});
