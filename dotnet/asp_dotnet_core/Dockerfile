# syntax=docker/dockerfile:1
# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

COPY *.sln .
# Is source dir right? Maybe cause of WORKDIR don't need ./app/
COPY app/*.csproj ./app/

RUN dotnet restore

# Check all this
COPY app/. ./app/

RUN dotnet publish -c release -o out --no-restore

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app

# Is destination right?
COPY --from=build /app ./

ENTRYPOINT ["dotnet", "app.dll"]
