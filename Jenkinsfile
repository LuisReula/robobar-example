pipeline {
    agent any

    stages {
        stage('Test'){
            steps{
                sh 'yarn cy:ci'
            }
            post{
                always {
                    nodeJS('node-14.18.2'){
                        junit 'results/*.xml'
                    }
                }
            }
        }
    }
}