@echo off
echo Setting up Prisma v7 database connection...
cd /d "d:\microservices-mern\auth-service"

echo.
echo Step 1: Generating Prisma client with v7 config...
npx prisma generate

if %errorlevel% neq 0 (
    echo Failed to generate Prisma client
    pause
    exit /b 1
)

echo.
echo Step 2: Running database migration...
npx prisma migrate dev --name init

if %errorlevel% neq 0 (
    echo Failed to run migration
    pause
    exit /b 1
)

echo.
echo Step 3: Testing database connection...
npx prisma db pull

echo.
echo Setup complete! Your Prisma v7 database is now configured.
echo.
echo Next steps:
echo 1. Your server will now connect to the database
echo 2. Restart your server: npm run dev
echo 3. Test the /auth/register endpoint
pause