import React from "react";
import BaseLayout from "../layouts/Base";
import Grid from "@material-ui/core/Grid";
import Image from "gatsby-image";
import PleaseTranslate from "../PleaseTranslate";
import LanguageNotAvailable from "../LanguageNotAvailable";

export default ({ pageContext }) => {
  const frontmatter = pageContext.node.frontmatter;
  const html = pageContext.node.html;
  let languageNotAvailable = "";
  let pleaseTranslate = "";
  if (pageContext.language !== pageContext.contentLanguage) {
    languageNotAvailable = <LanguageNotAvailable />;
    pleaseTranslate = (
      <PleaseTranslate
        filePath={pageContext.node.fileAbsolutePath}
        language={pageContext.language}
      />
    );
  }
  return (
    <BaseLayout slug={pageContext.slug}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={4} lg={3} xl={3} />
        <Grid item xs={12} sm={10} md={7} lg={5} xl={4} className={"wmax"}>
          <div className="blog-header">
            {languageNotAvailable}
            <figure>
              <Image
                fluid={frontmatter.img.childImageSharp.fluid}
                title={frontmatter.caption}
                alt={frontmatter.caption}
                backgroundColor={"#212121"}
              />
              <figcaption
                dangerouslySetInnerHTML={{ __html: frontmatter.caption }}
              />
            </figure>
          </div>
        </Grid>
        <Grid item xs={12} sm={10} md={0} lg={3} xl={3} />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={4} lg={3} xl={3} />
        <Grid item xs={12} sm={10} md={8} lg={5} xl={4}>
          <div className="blog-post content">
            <ul className="meta">
              <li>{frontmatter.date}</li>
              <li>#{frontmatter.patterns}</li>
            </ul>
            <h1>{frontmatter.title}</h1>
            <article dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </Grid>
        <Grid item xs={12} sm={10} md={0} lg={3} xl={3}>
          <div className="docs cot">{pleaseTranslate}</div>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};
