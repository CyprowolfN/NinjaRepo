node --max-old-space-size=4096 ../src/index.js
aws cloudformation deploy --template-file template.yaml \
    --stack-name ninjastorestack \
    --parameter-overrides \
        WebAppName=ninjaStore \
    --tags appName=ninjaStore \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile $1 --region us-east-1