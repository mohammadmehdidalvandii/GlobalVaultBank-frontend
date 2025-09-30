import { Helmet } from "react-helmet-async";

interface metaTagProps {
  title: string;
  description: string;
}

const MetaTag = ({title , description}:metaTagProps)=>{

  return (
    <Helmet>
      <title>Global Vault Bank | {title}</title>
      <meta name="description" content={description}/>
    </Helmet>
  )

}



export default MetaTag