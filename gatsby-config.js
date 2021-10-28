require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: "localhost:8000",
    title: "demo",
  },
  
  plugins: 

  [`gatsby-plugin-postcss`,
  {
    resolve: `gatsby-source-cloudinary`,
    options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      resourceType: `image`,
      prefix: `GatsbyDemo/` 
    }
  }

    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: ['Balance', 'BalanceTransaction', 'Product', 'ApplicationFee', 'Sku', 'Subscription'],
    //     secretKey: 'pk_live_04Oa47mEOEbloYJ4U1qYzLoz00J3p7yNS8',
    //     downloadFiles: true,
    //   }
    // }
  ]
  
};
