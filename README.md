# Connectivity Probe
This is a sample Node Express app that checks internet connectivity from a Windows Docker container

## Build
We will use Azure Container Registry to build it for various platforms

```
az acr build --image connection-check --platform windows https://github.com/vkacherov/connection-check.git
```

## Deployment
We can deploy this using the following command

```
kubectl apply -f https://raw.githubusercontent.com/vkacherov/connection-check/master/k8s/connection-check.yaml
```
