# Bản Lĩnh Tạo Nên Thành Công

Web đào tạo VitePress chuyển hoá từ bộ học liệu Markdown “Bản Lĩnh Tạo Nên Thành Công” cho bé gái 12 tuổi.

## Chạy local

```bash
npm install
npm run dev
```

Mặc định site chạy ở `http://127.0.0.1:5173/vi/`.

## Build và preview

```bash
npm run build
npm run preview
```

Output tĩnh nằm trong `docs/.vitepress/dist`.

## Cấu trúc nội dung

```text
docs/
  vi/
    index.md
    tong-quan/
    lo-trinh/
    lessons/
    resources/
    glossary/
    assessments/
    projects/
    phu-luc/
```

## Thêm bài học mới

1. Tạo route mới trong `docs/vi/lessons/<so-thu-tu>-<slug>/index.md`.
2. Viết nội dung Markdown với một H1 duy nhất.
3. Thêm link vào `lessonItems` trong `docs/.vitepress/config.mts`.
4. Chạy `npm run build` để kiểm tra link và cấu hình.

## Đổi base path khi deploy

Nếu deploy ở domain gốc, giữ:

```ts
const docsBase = "/";
```

Nếu deploy ở GitHub Pages dạng `https://user.github.io/repo-name/`, đổi thành:

```ts
const docsBase = "/repo-name/";
```

## Attribution

Theme được scaffold từ skill `build-vitepress-docs`, dựa trên starter VitePress có giấy phép đi kèm trong `LICENSE`, `LICENSE.upstream` và `NOTICE.md`.
