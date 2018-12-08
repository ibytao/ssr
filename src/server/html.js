export default function html(options) {
  const {
    app = 'main',
    title = 'Codejobs',
    stylesheet = '/css/style.css',
    markup
  } = options

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" type="text/css" href="//unpkg.com/antd-mobile/dist/antd-mobile.min.css"/>
        <link rel="stylesheet" type="text/css" href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="${stylesheet}" />
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="/app/vendor.bundle.js"></script>
        <script src="/app/${app}.bundle.js"></script>
      </body>
    </html>
  `
}
