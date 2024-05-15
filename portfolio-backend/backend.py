from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from openai import OpenAI
import random
import string

app = Flask(__name__)
CORS(app)  # This enables CORS for all domains; adjust as needed for production
client = OpenAI()

with open('resume.txt', 'r') as file:
    resume_text = file.read()

@app.route('/process', methods=['POST'])
def process_query():
    """Receives a query and processes it against the resume text."""
    data = request.json
    query = data.get('query')
    if not query:
        return jsonify({"error": "No query provided"}), 400
    
    pre_prompt = """You are an advocate for Brandon Ryan, a 26 year old software engineer who enjoys working with frontends and AI. 
    You are providing responses in the context of a chatbot on a portfolio website for Brandon. Users will ask you questions and it is your job
     to use the data provided to you to answer the question. You should speak excitedly and positively about Brandon. Answer the user question
    clearly and concisely, drawing information from the provided resources."""

    prompt_resources = f"\nHere is the resume as a resource: {resume_text}"

    prompt = pre_prompt + prompt_resources 

    response = client.chat.completions.create(
      model="gpt-4-turbo",
      messages=[
        {
          "role": "system",
          "content": prompt
        },
        {
          "role": "user",
          "content": query
        }
      ],
      temperature=1,
      max_tokens=256,
      top_p=1,
      frequency_penalty=0,
      presence_penalty=0
    )
    # Check if choices are present in the response
    if response.choices:
        # Extract the completion message from the first choice
        completion_message = response.choices[0].message
        
        # Check if the completion message is available and has content
        if completion_message and completion_message.content:
            answer = completion_message.content
            return jsonify({"answer": answer})
        else:
            return jsonify({"error": "Failed to extract the content from the response."})
    else:
        return jsonify({"error": "No completion choices found in the response."})
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 3001)))