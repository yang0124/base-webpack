<template>
  <div style="width: 256px">
    <a-menu
      :defaultSelectedKeys="selectedKeys"
      :defaultOpenKeys="openKeys"
      mode="inline"
      theme="dark"
    >
      <template v-for="item in itemData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>

        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
export default {
  components: {
    "sub-menu": SubMenu
  },
  data() {
    const rootData = this.$router.options.routes[0].children;
    const { itemData, selectedMap, openMap } = this.getItemData(
      rootData,
      {},
      {}
    );

    return {
      itemData,
      selectedKeys: [selectedMap[this.$route.path]],
      openKeys: [openMap[this.$route.path]]
    };
  },
  mounted() {
    console.log(this.itemData);
  },
  methods: {
    // 根据路由配置处理菜单栏的数据
    getItemData(data, selectedMap, openMap, rootPath = "") {
      const arr = [];
      data.forEach(item => {
        if (!item.hideInMenu && item.name) {
          let newItem = {
            path: `${rootPath}${item.path}`,
            name: item.name,
            meta: item.meta
          };
          if (!item.hideChildrenInMenu && item.children) {
            newItem.children = this.getItemData(
              item.children,
              selectedMap,
              openMap,
              rootPath + item.path + "/"
            ).itemData;
          }
          selectedMap[newItem.path] = newItem.path;
          const newPath = rootPath.endsWith("/")
            ? rootPath.substr(0, rootPath.length - 1)
            : rootPath;
          openMap[newItem.path] = newPath;
          arr.push(newItem);
        } else {
          return;
        }
      });
      return { itemData: arr, selectedMap, openMap };
    }
  }
};
</script>

<style>
</style>