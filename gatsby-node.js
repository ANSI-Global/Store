/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/product` page.
  if (page.path.match(/^\/product/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/product/*"

    // Update the page.
    createPage(page)
  }

  // Only update the `/admin` page.
  if (page.path.match(/^\/admin/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/admin/*"

    // Update the page.
    createPage(page)
  }
}