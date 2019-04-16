# connection-check
Sample containerized service to check internet connection

## Build
We will use Azure Container Registry to build it for various platforms

```
az acr build --image connection-check --platform windows https://github.com/vkacherov/connection-check.git
```
