
<template >
    <div class="the-body">
        <div class="box">
            <div>start:查看控制台网络请求</div>
            <div><img src="" data-origin="/src/assets/1.jpg" /></div>
            <div><img src="" data-origin="/src/assets/2.jpg" /></div>
            <div><img src="" data-origin="/src/assets/3.jpg" /></div>
            <div><img src="" data-origin="/src/assets/4.jpg" /></div>
            <div><img src="" data-origin="/src/assets/5.jpg" /></div>
            <div><img src="" data-origin="/src/assets/6.jpg" /></div>
            <div><img src="" data-origin="/src/assets/8.jpg" /></div>
            <div>end</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { nextTick } from "vue"

/**
 * @desc 图片懒加载
 * @api IntersectionObserver
 * @url [ruanyifeng](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)
 * @url [MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
 * @param observe 告诉`IntersectionObserver`观察的目标
 * @param unobserve 告诉`IntersectionObserver`停止观察的目标
 */
const theObserver = () => {
    // data-origin必须用全路径
    const images = document.querySelectorAll("img");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((item: any) => {
                //isIntersecting只读布尔值，表示true目标元素是否与交集观察者的根相交
                // 如果这是true，则描述过渡到相交状态；
                //如果是false，那么您知道过渡是从相交到不相交。
                if (item.isIntersecting) {
                    // 开始加载图片,把data-origin的值放到src
                    item.target.src = item.target.dataset.origin;
                    // 停止监听已开始加载的图片
                    observer.unobserve(item.target);
                }
            });
        },
        {
            // 交叉过视图的100，才开始派发事件
            rootMargin: "0px 0px -100px 0px",
        }
    );
    images.forEach((item) => observer.observe(item));
}
// 资源加载
nextTick(() => {
    theObserver();
})

</script>
  <!-- 应将图片高度/顶部距离进行设置，以进行改变可视区域 -->
<style scoped>
.the-body {
    margin: 0;
    display: flex;
    justify-content: center;
}

.box {

    height: 1800px;
}

img {
    width: 400px;
    min-height: 225px;
}
</style>
  