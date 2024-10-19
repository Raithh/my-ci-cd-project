provider "aws" {
  region = "us-east-1"  # Change this to your preferred AWS region
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = "my-cicd-webapp-bucket"  # Ensure this bucket name is unique
  acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_object" "index" {
  bucket = aws_s3_bucket.website_bucket.bucket
  key    = "index.html"
  source = "index.html"
  acl    = "public-read"
}

output "website_url" {
  value = aws_s3_bucket.website_bucket.website_endpoint
}
