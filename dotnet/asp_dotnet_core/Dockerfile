# syntax=docker/dockerfile:1
# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

COPY *.sln .
# Is source dir right? Is destination right?
COPY *.csproj .

RUN dotnet restore

# Check all this
COPY . .

# no-restore maybe not working?
RUN dotnet publish -c release -o out --no-restore

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app

# Is destination right?
COPY --from=build /app/out .

ENTRYPOINT ["dotnet", "app.dll"]
