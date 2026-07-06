from fastapi import FastAPI

app = FastAPI()

@app.get("/test")
def read_root():
    return {"message": "Backend is running"}

@app.post("/test")
def post_test():
    return {"message": "POST request received"}
