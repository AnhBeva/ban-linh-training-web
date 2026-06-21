/// <reference types="node" />
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const docsBase = "/ban-linh-training-web/";
const brandLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23B85B42" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.8l2.1 4.3 4.7.7-3.4 3.3.8 4.7L12 14.6 7.8 16.8l.8-4.7-3.4-3.3 4.7-.7L12 3.8z"/><path d="M5.5 20.2c2.1-1.4 4.2-2.1 6.5-2.1s4.4.7 6.5 2.1"/></svg>';

const nav = [
  { text: "Tổng quan", link: "/vi/tong-quan/", activeMatch: "^/vi/(tong-quan|lo-trinh)/" },
  { text: "Bài học", link: "/vi/lessons/", activeMatch: "^/vi/lessons/" },
  { text: "Dự án", link: "/vi/projects/", activeMatch: "^/vi/projects/" },
  { text: "Tài nguyên", link: "/vi/resources/", activeMatch: "^/vi/resources/" },
  { text: "Phụ huynh", link: "/vi/phu-luc/phu-huynh-dong-hanh/", activeMatch: "^/vi/phu-luc/" }
];

const overviewItems = [
  { text: "Cổng vào khóa học", link: "/vi/" },
  { text: "Tổng quan", link: "/vi/tong-quan/" },
  { text: "Bản đồ giáo trình", link: "/vi/lo-trinh/" }
];

const lessonItems = [
  { text: "Tất cả bài học", link: "/vi/lessons/" },
  { text: "Tuần 1: Mình là người như thế nào", collapsed: false, items: [
    { text: "Bài 1: Tính cách là lựa chọn nhỏ", link: "/vi/lessons/01-tinh-cach-la-lua-chon-nho/" },
    { text: "Bài 2: Người mình muốn trở thành", link: "/vi/lessons/02-minh-muon-tro-thanh-nguoi-nhu-the-nao/" }
  ]},
  { text: "Tuần 2: Trách nhiệm và lời hứa", collapsed: false, items: [
    { text: "Bài 3: Trách nhiệm là phần mình có thể làm", link: "/vi/lessons/03-trach-nhiem-la-phan-minh-co-the-lam/" },
    { text: "Bài 4: Kỷ luật là giữ lời hứa nhỏ", link: "/vi/lessons/04-ky-luat-la-giu-loi-hua-nho/" }
  ]},
  { text: "Tuần 3: Khi gặp khó", collapsed: false, items: [
    { text: "Bài 5: Không bỏ cuộc quá sớm", link: "/vi/lessons/05-khong-bo-cuoc-qua-som/" },
    { text: "Bài 6: Bình tĩnh trước khi phản ứng", link: "/vi/lessons/06-binh-tinh-truoc-khi-phan-ung/" }
  ]},
  { text: "Tuần 4: Đáng tin và nguyên tắc sống", collapsed: false, items: [
    { text: "Bài 7: Trung thực và đáng tin", link: "/vi/lessons/07-trung-thuc-va-dang-tin/" },
    { text: "Bài 8: Bộ quy tắc bản lĩnh", link: "/vi/lessons/08-bo-quy-tac-ban-linh-cua-minh/" }
  ]}
];

const projectItems = [
  { text: "Tổng quan dự án", link: "/vi/projects/" },
  { text: "Dự án 30 ngày", link: "/vi/projects/du-an-30-ngay/" }
];

const resourceItems = [
  { text: "Thư viện tài nguyên", link: "/vi/resources/" },
  { text: "Sổ tay thực hành", link: "/vi/resources/so-tay-thuc-hanh/" },
  { text: "Checklist bản lĩnh", link: "/vi/resources/checklist-ban-linh/" },
  { text: "Thuật ngữ dễ hiểu", link: "/vi/glossary/" },
  { text: "Tự đánh giá", link: "/vi/assessments/" }
];

const parentItems = [
  { text: "Phụ huynh đồng hành", link: "/vi/phu-luc/phu-huynh-dong-hanh/" }
];

const viThemeConfig = {
  nav,
  search: {
    provider: "local"
  },
  sidebar: {
    "/vi/projects/": [{ text: "Dự án", items: projectItems }],
    "/vi/resources/": [{ text: "Tài nguyên", items: resourceItems }],
    "/vi/glossary/": [{ text: "Tài nguyên", items: resourceItems }],
    "/vi/assessments/": [{ text: "Tài nguyên", items: resourceItems }],
    "/vi/phu-luc/": [{ text: "Phụ huynh", items: parentItems }],
    "/vi/lessons/": [{ text: "Bài học", items: lessonItems }],
    "/vi/": [
      { text: "Bắt đầu", items: overviewItems },
      { text: "Bài học", items: lessonItems },
      { text: "Tài nguyên", items: resourceItems },
      { text: "Dự án", items: projectItems }
    ]
  },
  outline: { level: [2, 3], label: "Trong trang này" },
  docFooter: { prev: "Trang trước", next: "Trang sau" },
  lastUpdated: { text: "Cập nhật lần cuối" },
  returnToTopLabel: "Trở lên trên cùng",
  sidebarMenuLabel: "Menu",
  darkModeSwitchLabel: "Giao diện",
  lightModeSwitchTitle: "Chuyển sang chế độ sáng",
  darkModeSwitchTitle: "Chuyển sang chế độ tối",
  socialLinks: []
};

export default withMermaid(
  defineConfig({
    title: "Bản Lĩnh Tạo Nên Thành Công",
    description: "Web đào tạo bản lĩnh cho bé gái 12 tuổi",
    base: docsBase,
    cleanUrls: true,
    lastUpdated: true,
    appearance: true,
    ignoreDeadLinks: false,
    srcExclude: ["README.md"],
    head: [
      ["link", { rel: "icon", type: "image/svg+xml", href: brandLogo }]
    ],
    markdown: {
      theme: { light: "github-light", dark: "github-dark" },
      lineNumbers: false
    },
    locales: {
      root: {
        label: "Tiếng Việt",
        lang: "vi-VN",
        link: "/vi/",
        themeConfig: viThemeConfig
      }
    },
    themeConfig: {
      logo: brandLogo,
      search: {
        provider: "local"
      },
      siteTitle: "Bản Lĩnh Tạo Nên Thành Công",
      ...viThemeConfig
    },
    mermaid: {
      theme: "base",
      themeVariables: {
        primaryColor: "#B85B42",
        primaryTextColor: "#ffffff",
        primaryBorderColor: "#9F4934",
        lineColor: "#6E625D",
        secondaryColor: "#F1E8DF",
        tertiaryColor: "#FFF9F2",
        fontFamily: "Inter, sans-serif"
      }
    }
  })
);
