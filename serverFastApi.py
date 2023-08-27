from  fastapi import FastAPI
from subprocess import call
app = FastAPI()



@app.get('/prompt/{prompt}')
async def root(prompt):
    call(["python","APIChatStream.py"])
    return {"prompt":prompt}