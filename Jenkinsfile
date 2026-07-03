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
                // Installs dependencies and runs build to verify local compilation
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                // Builds the docker image from production Dockerfile
                sh "docker build -f Dockerfile.prod -t ${IMAGE_NAME}:${env.BUILD_NUMBER} -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Docker Push') {
            steps {
                script {
                    try {
                        // Attempt to log in and push to Docker Hub
                        // This stage will not fail the pipeline if credentials are not configured
                        withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                            sh 'docker login -u $USER -p $PASS'
                            sh "docker push ${IMAGE_NAME}:${env.BUILD_NUMBER}"
                            sh "docker push ${IMAGE_NAME}:latest"
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
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
                sh "kubectl set image deployment/portfolio-deployment portfolio=${IMAGE_NAME}:${env.BUILD_NUMBER}"
            }
        }
    }
}
