pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ishaannegi/portfolio'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Build') {
            steps {
                // Installs dependencies and runs build to verify local compilation on Windows
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                // Builds the docker image from production Dockerfile
                bat "docker build -f Dockerfile.prod -t ${IMAGE_NAME}:${env.BUILD_NUMBER} -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Docker Push') {
            steps {
                script {
                    try {
                        // Attempt to log in and push to Docker Hub
                        // This stage will not fail the pipeline if credentials are not configured
                        withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                            bat 'docker login -u %USER% -p %PASS%'
                            bat "docker push ${IMAGE_NAME}:${env.BUILD_NUMBER}"
                            bat "docker push ${IMAGE_NAME}:latest"
                        }
                    } catch (Exception e) {
                        echo "Docker Hub credentials not configured or push failed: ${e.message}."
                        echo "Skipping Docker Push stage, proceeding with pipeline."
                    }
                }
            }
        }

        stage('Deploy to K8s') {
            steps {
                // Deploys app to Kubernetes cluster and updates the container image
                bat 'kubectl apply -f k8s/deployment.yaml'
                bat 'kubectl apply -f k8s/service.yaml'
                bat "kubectl set image deployment/portfolio-deployment portfolio=${IMAGE_NAME}:${env.BUILD_NUMBER}"
            }
        }
    }
}
