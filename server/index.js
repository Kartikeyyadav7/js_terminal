// const http = require("http");
// const SocketService = require("./SocketService");

// /*
//   Create Server from http module.
//   If you use other packages like express, use something like,
//   const app = require("express")();
//   const server = require("http").Server(app);

// */
// const server = http.createServer((req, res) => {
// 	res.write("Terminal Server Running.");
// 	res.end();
// });

// const port = 8080;

// server.listen(port, function () {
// 	console.log("Server listening on : ", port);
// 	const socketService = new SocketService();
// 	socketService.attachServer(server);
// });

const { createServer } = require("http");
const { Server } = require("socket.io");
const os = require("os");
const pty = require("node-pty");

const httpServer = createServer((req, res) => {
	res.write("termian server started");
	res.end();
});

const io = new Server(httpServer, {
	cors: {
		origin: ["http://localhost:59048"],
	},
});

const shell =
	process.env[os.platform() === "win32" ? "powershell.exe" : "bash"];

const ptyProcess = pty.spawn(shell, [], {
	name: "xterm-color",
	// cols: 80,
	// rows: 30,
	cwd: process.env.HOME,
	env: process.env,
});

io.on("connection", (socket) => {
	console.log("Connected to client", socket.id);

	socket.on("disconnect", () => {
		console.log("Disconnected Socket: ", socket.id);
	});

	socket.on("input", (input) => {
		ptyProcess.write(input);
	});

	ptyProcess.onData((e) => {
		socket.emit("output", e);
	});
});

const port = 8080;

httpServer.listen(port, () => {
	console.log("server listening on port", port);
});
