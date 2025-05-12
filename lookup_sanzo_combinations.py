import requests
import sys

SANZO_URL = 'https://sanzo-wada.dmbk.io/assets/colors.json'

def fetch_colors():
    response = requests.get(SANZO_URL)
    response.raise_for_status()
    return response.json()

def lookup_combinations(hex_codes):
    data = fetch_colors()
    hex_codes = [h.lower() for h in hex_codes]
    found = False
    for color in data:
        color_hex = color['hex'].lower()
        if color_hex in hex_codes:
            found = True
            print(f"Color: {color['name']} ({color_hex})")
            print(f"  Combinations: {color['combinations']}")
            print(f"  Use count: {color['use_count']}")
            print()
    if not found:
        print("No matching colors found.")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python lookup_sanzo_combinations.py <hex1> [<hex2> ...]")
        sys.exit(1)
    lookup_combinations(sys.argv[1:]) 