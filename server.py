import http.server
import socketserver
import os
import socket

PORT = 8080

# Change to the directory where the script is located
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Get local IP address
def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        local_ip = s.getsockname()[0]
        s.close()
        return local_ip
    except Exception as e:
        return "127.0.0.1"

local_ip = get_local_ip()

# Create server
Handler = http.server.SimpleHTTPRequestHandler

try:
    # Create server
    with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
        print(f"\nServer is running!")
        print(f"Local access: http://localhost:{PORT}")
        print(f"Network access: http://{local_ip}:{PORT}")
        print("\nTo access from your phone:")
        print("1. Make sure your phone is on the same WiFi network as your laptop")
        print("2. Use the Network access URL above")
        print("\nPress Ctrl+C to stop the server")
        httpd.serve_forever()
except Exception as e:
    print(f"\nError starting server: {e}")
    print("\nTry these solutions:")
    print("1. Make sure you're in the correct directory")
    print("2. Try a different port number") 