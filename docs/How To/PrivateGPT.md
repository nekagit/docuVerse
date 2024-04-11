Install [[General Coding Installation]]
https://itsfoss.com/privategpt-setup/
## Linux Guide
### Terminal

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

- Run these two commands in your terminal to add Homebrew to your PATH:
    (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/nenad/.bashrc
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
- Install Homebrew's dependencies if you have sudo access:
    sudo apt-get install build-essential
  For more information, see:
    https://docs.brew.sh/Homebrew-on-Linux
- We recommend that you install GCC:
    brew install gcc
- Run brew help to get started
- Further documentation:
    https://docs.brew.sh

for homebrew

---

sudo apt update sudo apt install pipx pipx ensurepath sudo pipx ensurepath --global

for pipx

---

pipx install poetry

for poetry

---
brew install make 

for make 

---
https://ollama.com/download
curl -fsSL https://ollama.com/install.sh | sh

ollama pull mistral
ollama pull nomic-embed-text

ollama serve

poetry install --extras "ui llms-ollama embeddings-ollama vector-stores-qdrant"

PGPT_PROFILES=ollama make run


---
  git clone https://github.com/imartinez/privateGPT
  cd privateGPT

---

### local, Ollama-powered setup - RECOMMENDED

**The easiest way to run PrivateGPT fully locally** is to depend on Ollama for the LLM. Ollama provides local LLM and Embeddings super easy to install and use, abstracting the complexity of GPU support. It’s the recommended setup for local development.

Go to [ollama.ai](https://ollama.ai/) and follow the instructions to install Ollama on your machine.

After the installation, make sure the Ollama desktop app is closed.

Install the models to be used, the default settings-ollama.yaml is configured to user `mistral 7b` LLM (~4GB) and `nomic-embed-text` Embeddings (~275MB). Therefore:

`   |   |   | |---|---| |$|ollama pull mistral| |>|ollama pull nomic-embed-text|     `

Now, start Ollama service (it will start a local inference server, serving both the LLM and the Embeddings):

`   |   |   | |---|---| |$|ollama serve|     `

Once done, on a different terminal, you can install PrivateGPT with the following command:

`   |   |   | |---|---| |$|poetry install --extras "ui llms-ollama embeddings-ollama vector-stores-qdrant"|     `

Once installed, you can run PrivateGPT. Make sure you have a working Ollama running locally before running the following command.

`   |   |   | |---|---| |$|PGPT_PROFILES=ollama make run|     `

PrivateGPT will use the already existing `settings-ollama.yaml` settings file, which is already configured to use Ollama LLM and Embeddings, and Qdrant. Review it and adapt it to your needs (different models, different Ollama port, etc.)

The UI will be available at [http://localhost:8001](http://localhost:8001/)