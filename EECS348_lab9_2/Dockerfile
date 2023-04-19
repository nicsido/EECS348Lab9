# Set the base image to use
FROM gcc:latest
# Copy the C program into the container
COPY ACTUALProgram1.c .
# Compile the C program
RUN gcc -o ACTUALProgram1 ACTUALProgram1.c
# Set the command to run when the container starts
CMD ["./ACTUALProgram1"]