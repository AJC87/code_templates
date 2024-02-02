# syntax=docker/dockerfile:1
# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

# TODO: do we need to copy everything
COPY . ./

RUN dotnet restore
RUN dotnet publish -c Release -o out

# Runtime stage
FROM mcr.microsoft.com/dotnet/runtime:8.0

WORKDIR /app

COPY --from=build-env /app/out .

# Replace with actual application name
ENTRYPOINT ["dotnet", "app.dll"]
