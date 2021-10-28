import React from 'react'
import '../styles/global.css'
import '../styles/gallery.css'
import {useStaticQuery, graphql} from 'gatsby'

const ImageGallery = () => {
    const data = useStaticQuery(graphql`query CloudinaryImage {
            allCloudinaryMedia {
              edges {
                node {
                  secure_url
                }
              }
            }
          }`
    )
    const clImages = data.allCloudinaryMedia.edges
    return (
        <div>
          <div className="image-grid p-4 border-gray-200 border-2">
            {clImages.map((image, index) => (
                  <div className="image-item" key={`${index}-cl`}>
                    <img src={image.node.secure_url} alt={"no alt :("} />
                  </div>
                ))
            }
          </div>
        </div>
      )
  }
  export default ImageGallery
