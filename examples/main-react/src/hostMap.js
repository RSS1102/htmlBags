const map = {
  "//localhost:8082/": "//wujie-micro.github.io/demo-vue3/",
};

export default function hostMap(host) {
  if (process.env.NODE_ENV === "production") return map[host];
  return host;
}
