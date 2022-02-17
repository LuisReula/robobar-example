pipeline {
    agent any

    stages {
        stage('Test'){
            steps{
                nodejs('node-14.18.2'){
                    sh 'yarn install cy:ci'
                }
            }
            post{
                always {
                    junit 'results/*.xml'
                }
            }
        }
    }
}