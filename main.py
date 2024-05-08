import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv('API_KEY')

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-pro')

sample_file = genai.upload_file(path="bangkit-cert.png",
                            display_name="Bangkit cert")

print(f"Uploaded file '{sample_file.display_name}' as: {sample_file.uri}")

response = model.generate_content(["Describe the document with a creative description.", sample_file])
print(response.text)

