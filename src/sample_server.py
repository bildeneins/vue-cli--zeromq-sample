import zmq, sys


# TODO: モジュール化する！
def start_server():
    context = zmq.Context()
    socket = context.socket(zmq.REP)
    socket.bind("tcp://*:50010")

    print("Server startup.")
    sys.stdout.flush()

    while True:
        data = socket.recv_json()
        print(type(data))
        print(data)
        socket.send_json({"is_success": True, "data": 'apple'})
        print('sent')
        sys.stdout.flush()


if __name__ == "__main__":
    start_server()
