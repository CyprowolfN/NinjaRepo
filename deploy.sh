node --max-old-space-size=4096 ../src/index.js
aws cloudformation deploy --template-file template.yaml \
    --stack-name imotocommunityadmin \
    --parameter-overrides \
        CommunityName=imoto \
    --tags community=imoto \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile $1 --region us-east-1