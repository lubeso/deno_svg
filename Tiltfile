local_resource(
  name="dev",
  serve_cmd="deno task dev"
)

local_resource(
  name="tests",
  serve_cmd=[
    "deno",
    "test",
    "--watch",
    "--allow-read",
    "--allow-write"
  ]
)

local_resource(
  name="gapplin",
  cmd=[
    "open",
    "-a",
    "Gapplin.app",
    "canvas.svg",
  ]
)
