import google.generativeai as genai
import os
from dotenv import load_dotenv
import json

load_dotenv()

API_KEY = os.getenv('API_KEY')

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('models/gemini-1.5-pro-latest')

sample_file = genai.upload_file(path="bangkit-cert.png",
                            display_name="KP")

print(f"Uploaded file '{sample_file.display_name}' as: {sample_file.uri}")

response = model.generate_content(["Describe information in this image dengan balikan json", sample_file])
print(json.dumps(response.text))

