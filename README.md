# learn_FARM_stack
Version control for keeping track of how Kaustubh is learning FARM stack being a farmer himself from Yavatmal, Maharashtra,India.

# learn FARM stack integration

Following the video tutorial: https://www.youtube.com/watch?v=OzUzrs8uJl8&t=10s

# Start MongoDB Server
sudo systemctl start mongod

# ReactJS Frontend
cd frontend

npm install

npm start

# FastAPI Server
cd backend

conda create --name NAME_OF_ENVIRONTMENT --file requirements.txt

conda activate NAME_OF_ENVIRONTMENT

python --version

Python version should be above 3.9+
## Start FastAPI Server
uvicorn main:app --reload