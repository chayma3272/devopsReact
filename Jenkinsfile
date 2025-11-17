pipeline {
    agent any
  
    environment {
        IMAGE = 'chayma9/devops'
        TAG = "build-${env.BUILD_NUMBER}"
        CONTAINER_NAME = "devops-react-app" 

    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                bat "docker build -t %IMAGE%:%TAG% ."
            }
        }

        stage('Smoke Test') {
            steps {
                bat """
                docker rm -f %CONTAINER_NAME% 2>nul || ver > nul
                
                docker run -d --name %CONTAINER_NAME% -p 8081:80 %IMAGE%:%TAG%
                
                ping -n 3 127.0.0.1 > nul
                
                curl -I http://localhost:8081 | find "200 OK"
                
                docker rm -f %CONTAINER_NAME%
                """
            }
        }

        stage('Push (Docker Hub )') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'id',
                                                usernameVariable: 'USER',
                                                passwordVariable: 'PASS')]) {
                    bat """
                    echo %PASS% | docker login -u %USER% --password-stdin
                    docker tag %IMAGE%:%TAG% %IMAGE%:latest
                    docker push %IMAGE%:%TAG%
                    docker push %IMAGE%:latest
                    """
                }
            }
        }
    }

    post {
        success { echo 'Build+Test+Push OK' }
        failure { echo 'Build/Tests/Push KO' }
    }
}
