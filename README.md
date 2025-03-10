# Kingz Kutz Frontend

This repository contains the frontend part of the web application for Glen Waverley barber Kingz Kutz. The frontend is hosted on AWS S3 and utilizes various AWS services for performance optimization, security, and DNS management.

## Overview

Kingz Kutz is a modern barber shop located in Glen Waverley. This web application provides customers with an easy way to browse services, book appointments, and stay updated with the latest news and promotions.

## Structure

### Assests
- Images
- Videos

### Components
- Footer
- Navbar
- ServiceItem
- Subheading

### Constants
- data.js: contains service information
- images.js: imports images from assests directory

### Container
- Assistant: AI helper
- Barber: About section
- Block
- FindUs: Contact and location
- Gallery: Showcase of images
- Header
- Intro: Video
- Partners
- Rules
- Services: Showcase of what is provided


## Services Used

### Amazon S3
Amazon S3 is used to host the `static website files` for the frontend. It provides durable and scalable storage for the HTML, CSS, JavaScript, and image files that make up the web application.

### Amazon CloudFront
Amazon CloudFront is a Content Delivery Network (CDN) used to `distribute the static content` stored in S3 globally. CloudFront provides low latency and high transfer speeds, ensuring a smooth user experience. It also supports `HTTPS`, ensuring that data between the users and the website is encrypted and secure.

### AWS Certificate Manager (ACM)
AWS Certificate Manager (ACM) is used to manage `SSL/TLS certificates` for the web application. ACM provides the SSL certificate that CloudFront uses to `enable HTTPS`, securing the data transmitted between users and the website.

### Amazon Route 53
Amazon Route 53 is a scalable `Domain Name System (DNS)` web service used to `manage the domain names` for Kingz Kutz. It handles DNS routing and ensures that traffic is directed to the correct resources. Route 53 is also used to `configure subdomain redirection`, ensuring that traffic to subdomains is correctly redirected to the main domain.