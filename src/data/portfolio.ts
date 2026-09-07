const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

// Source references and publication decisions are recorded in docs/content-sources.md.
export const profile = {
  name: 'Tùng Trịnh',
  role: 'Backend Developer',
  email: 'tgtrh0604@gmail.com',
  github: 'https://github.com/TgTrh06',
  repositories: 'https://github.com/TgTrh06?tab=repositories',
  landscape: asset('fujisan.webp'),
}

export interface Project {
  id: string
  number: string
  name: string
  japaneseName: string
  category: string
  description: string
  stack: string[]
  repository: string
  demo?: string
  image?: string
  imageAlt?: string
  imageCaption?: string
  context: string
  scope: string
  decisions: string[]
}

export const projects: Project[] = [
  {
    id: 'itsu-sushi',
    number: '01',
    name: 'Itsu Sushi',
    japaneseName: 'いつすし',
    category: 'ĐẶT BÀN & QUẢN LÝ NHÀ HÀNG',
    description: 'Từ chọn chỗ ngồi đến xác nhận thanh toán. Một ứng dụng kết nối trải nghiệm đặt bàn với quy trình vận hành phía sau.',
    stack: ['TypeScript', 'Express', 'MongoDB', 'React', 'Zod', 'VNPay'],
    repository: 'https://github.com/TgTrh06/project.sushi-shop',
    demo: 'https://project-sushi-shop-frontend.vercel.app/',
    image: asset('itsu-sushi-preview.png'),
    imageAlt: 'Ảnh chụp phần đầu trang Itsu Sushi: giao diện đỏ và kem, hình sushi và thao tác đặt bàn.',
    imageCaption: 'Giao diện từ demo Itsu Sushi',
    context: 'Ứng dụng nhà hàng với đặt bàn, quản lý thực đơn, thanh toán và công cụ quản trị.',
    scope: 'Dự án cá nhân. Xây dựng các luồng cho khách hàng và quản trị viên, từ giao diện đến backend và dữ liệu.',
    decisions: [
      'Mô hình hóa chỗ trống, chuyển trạng thái đặt bàn, xác nhận thanh toán và phê duyệt của quản trị viên.',
      'Dùng JWT access/refresh token, bảo vệ route và kiểm tra dữ liệu đầu vào bằng Zod.',
      'Tổ chức TypeScript monorepo với backend, frontend và package validation dùng chung.',
    ],
  },
  {
    id: 'itsuki-no-tabi',
    number: '02',
    name: 'Itsuki no Tabi',
    japaneseName: 'いつきの旅',
    category: 'KHÁM PHÁ & LÊN KẾ HOẠCH DU LỊCH',
    description: 'Một nơi để khám phá Nhật Bản, đọc những câu chuyện và sắp xếp hành trình của riêng mình.',
    stack: ['Node.js', 'Express', 'MongoDB', 'React', 'Vite'],
    repository: 'https://github.com/TgTrh06/project.itsuki-traveling',
    context: 'Nền tảng hướng dẫn du lịch và lập kế hoạch chuyến đi tập trung vào Nhật Bản.',
    scope: 'Ứng dụng full-stack gồm khám phá điểm đến, xuất bản bài viết, lập lịch trình và công cụ quản trị.',
    decisions: [
      'Kết nối nội dung điểm đến và bài viết với nhu cầu lập kế hoạch hành trình.',
      'Sử dụng JWT cho xác thực, cùng công cụ quản trị nội dung.',
      'Kết hợp Node.js, Express và MongoDB ở backend với React và Vite ở frontend.',
    ],
  },
]

export const practices = [
  { number: '01', title: 'Rõ ràng từ bên trong', description: 'Mình quan tâm đến API có cấu trúc, dữ liệu được kiểm tra và những luồng xử lý có thể hiểu, kiểm thử, bảo trì.', tools: 'Node.js · TypeScript · Express' },
  { number: '02', title: 'Đúng ở những điểm chạm', description: 'Xác thực, phân quyền và thanh toán là những nơi mình chú ý đến trạng thái, điều kiện và cả những trường hợp không đi đúng dự định.', tools: 'JWT · Zod · MongoDB · PostgreSQL' },
  { number: '03', title: 'Trọn vẹn đến trải nghiệm', description: 'Mình cũng xây giao diện để nối những gì hệ thống làm được với một trải nghiệm dễ hiểu và dễ sử dụng.', tools: 'React · Vite · Git · Playwright' },
]
