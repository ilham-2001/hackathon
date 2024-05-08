import google.generativeai as genai
import os
from dotenv import load_dotenv
import json
import argparse

parser = argparse.ArgumentParser()

parser.add_argument("-i", "--input", help = "Input file")

args = parser.parse_args()

load_dotenv()
print(args.input)

API_KEY = os.getenv('API_KEY')

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('models/gemini-1.5-pro-latest')


sample_file = genai.upload_file(path=args.input,
                            display_name="KP")

print(f"Uploaded file '{sample_file.display_name}' as: {sample_file.uri}")

response = model.generate_content(["Describe information in this image dengan balikan json", sample_file])
print(response.text)
# print(json.dumps(response.text))

