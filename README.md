# scg-techdev-assignment

Web assignment for SCG tech dev.

## Starting Front-end server

cd frontend<br/>npm install<br/>npm start

## Build jar for springboot using maven

pre-built server.jar is provided but it does not contain googleAPIkey </br>
cd backend/springboot</br>
mvn install -f pom.xml

## Starting Back-end server

java -jar backend/springboot/target/server.jar

## Google API key is required to view get Direction page, configure your google api key value in

frontend/.env<br/>
and<br/>
backend/springboot/src/main/resources/application.properties<br/>
You will need to run "mvn install -f pom.xml" again
