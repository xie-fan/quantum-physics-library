# 量子物理教材指南 / Quantum Physics Textbook Library

导航与导读页：合法开放教材 + 经典教材介绍。可部署为 GitHub Pages。

**仓库：** https://github.com/xie-fan/quantum-physics-library  
**站点（启用 Pages 后）：** https://xie-fan.github.io/quantum-physics-library/

## 为什么不直接存放教材 PDF

Griffiths、Sakurai、Shankar、Cohen-Tannoudji 等商业教材受版权保护。把 PDF 上传到 GitHub 属于侵权，也违反 GitHub 服务条款。

本仓库只做三件事：

1. 为每本重要教材写一篇短介绍
2. 开放授权 / 作者官方免费资源 → 链接官方源
3. 商业教材 → 出版社 / 购买 / 图书馆链接

## 启用 GitHub Pages

1. 打开仓库 **Settings → Pages**
2. Source 选 **Deploy from a branch**
3. Branch 选 `main`，目录选 `/ (root)`
4. 保存。等 1–2 分钟后访问：
   `https://xie-fan.github.io/quantum-physics-library/`

## 站点结构

```
index.html          总导航
about.html          竖版权与使用说明
path.html           推荐阅读路线
styles.css          样式
books/*.html        单本介绍页
```

## 分类

- 入门：Feynman Vol. III、Styer、Idema、OpenStax Vol. 3
- 本科：Tong、Griffiths、Townsend、MIT OCW
- 研究生：Sakurai、Shankar、Likharev、Cohen-Tannoudji
- 基础与数学：Landsman、Woit、Dirac、Weinberg
- 量子信息：Nielsen & Chuang

## License

站点代码：MIT。教材版权归作者与出版社。
