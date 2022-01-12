import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { io } from "socket.io-client";

// const serverAddress = "http://localhost:8080";
const serverAddress = "http://192.168.43.27/";

//* Create terminal just creates a terminal

const createTerminal = (term) => {
	term.open(document.getElementById("terminal"));
	term.options = {};
	term.write("Hello");
	term.write(`\r\n$ `);
};

//* connectToSocket will return a new Promise when the socket connection is successfull

const connectToSocket = (serverAddress) => {
	return new Promise((res) => {
		const socket = io(serverAddress);
		res(socket);
	});
};

/* Here we basically call the function connectToSocket and do something if it connects which is basically
create a terminal and then what onData does is returns the thing that we typed in the terminal and then emit that "input"
which the data gives us and then finally , if we get data response from the "output", we write that to the terminal
*/

connectToSocket(serverAddress)
	.then((socket) => {
		console.log("The socket is getting first");
		socket.on("connect", () => {
			console.log("Id", socket.id);
			console.log("Now the terminal is instantiated");
			const term = new Terminal();
			console.log("Creating a new terminal now");
			createTerminal(term);
			socket.on("output", (data) => {
				console.log("Now I am getting data from pty", data);
				// When there is data from PTY on server, print that on Terminal.
				term.write(data);
			});
			term.onData((data) => {
				console.log("Now data is being emitted", data);
				socket.emit("input", data);
			});
		});
	})
	.catch((err) => console.log("Error occured while connecting to socket"));
