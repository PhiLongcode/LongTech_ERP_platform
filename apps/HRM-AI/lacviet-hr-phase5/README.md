# LAC VIET HR - Phase 5: Compensation Planning & Succession Planning

## 📋 Overview

Phase 5 bổ sung 2 module enterprise-grade cho LAC VIET HR:
1. **Compensation Planning** - Quản lý lương thưởng và ngân sách
2. **Succession Planning** - Quản lý kế nhiệm và phát triển nhân tài

Tài liệu này mô tả phạm vi Phase 5 ở mức module/domain. Khi tích hợp vào ứng dụng chính, cần map lại auth, middleware, routing và schema migration theo kiến trúc của `apps/HRM`.

---

## 🏗️ Architecture

```
lacviet-hr-phase5/
├── compensation-planning/
│   ├── api/compensation.controller.ts
│   ├── services/compensation.service.ts
│   ├── types/compensation.types.ts
│   └── components/index.tsx
├── succession-planning/
│   ├── api/succession.controller.ts
│   ├── services/succession.service.ts
│   ├── types/succession.types.ts
│   └── components/index.tsx
├── hooks/index.ts
├── prisma/schema.prisma
├── src/modules/compensation/types/index.ts
└── README.md
```

---

## 💰 COMPENSATION PLANNING MODULE

### Features

| Feature | Description |
|---------|-------------|
| **Compensation Cycles** | Annual/Mid-year/Quarterly cycles với workflow |
| **Budget Management** | Phân bổ ngân sách theo department, theo pool |
| **Merit Matrix** | Ma trận tăng lương theo performance & compa-ratio |
| **Salary Structure** | Quản lý salary grades, bands, ranges |
| **Adjustments** | Merit increase, promotion, bonus, equity |
| **Total Rewards** | Báo cáo tổng thu nhập cho nhân viên |
| **Analytics** | Phân tích compa-ratio, budget utilization |

### Data Models

```typescript
// Core entities
- CompensationCycle       // Chu kỳ điều chỉnh lương
- BudgetPoolAllocation    // Phân bổ ngân sách
- MeritMatrix             // Ma trận merit increase
- SalaryGrade             // Bậc lương
- CompensationAdjustment  // Đề xuất điều chỉnh
- TotalRewardsStatement   // Báo cáo tổng thu nhập
```

### API Endpoints (module design)

```
GET    /api/compensation/cycles                 # List cycles
POST   /api/compensation/cycles                 # Create cycle
GET    /api/compensation/cycles/:id             # Get cycle
PATCH  /api/compensation/cycles/:id/status      # Update status
GET    /api/compensation/cycles/:id/budget      # Budget summary

POST   /api/compensation/cycles/:id/merit-matrix    # Create matrix
GET    /api/compensation/merit-matrix/:id/recommend # Get recommendation

GET    /api/compensation/adjustments            # List adjustments
POST   /api/compensation/adjustments            # Create adjustment
POST   /api/compensation/adjustments/bulk       # Bulk create
POST   /api/compensation/adjustments/:id/approve # Approve/Reject

GET    /api/compensation/salary-grades          # List grades
POST   /api/compensation/salary-grades          # Create grade
PUT    /api/compensation/salary-grades/:id      # Update grade

GET    /api/compensation/total-rewards/:employeeId # Total rewards
GET    /api/compensation/analytics              # Analytics
```

### Merit Matrix Example

```
                    Compa-Ratio
                    <80%   80-95%  95-105%  105-120%  >120%
Performance   ┌─────────────────────────────────────────────┐
    5 (Top)   │  8%     7%      6%       4%        2%      │
    4         │  7%     6%      5%       3%        1%      │
    3 (Meets) │  5%     4%      3%       2%        0%      │
    2         │  3%     2%      2%       1%        0%      │
    1 (Low)   │  0%     0%      0%       0%        0%      │
              └─────────────────────────────────────────────┘
```

---

## 👥 SUCCESSION PLANNING MODULE

### Features

| Feature | Description |
|---------|-------------|
| **Critical Positions** | Xác định vị trí quan trọng, đánh giá rủi ro |
| **Talent Profiles** | Hồ sơ nhân tài với competency, experience |
| **9-Box Grid** | Performance vs Potential matrix |
| **Succession Plans** | Kế hoạch kế nhiệm với successor pipeline |
| **Development Plans** | Lộ trình phát triển cá nhân |
| **Talent Pools** | Nhóm nhân tài (HiPo, Leadership, etc.) |
| **Analytics** | Dashboard & báo cáo toàn diện |

### Data Models

```typescript
// Core entities
- CriticalPosition        // Vị trí quan trọng
- TalentProfile           // Hồ sơ nhân tài
- SuccessionPlan          // Kế hoạch kế nhiệm
- SuccessorCandidate      // Ứng viên kế nhiệm
- DevelopmentPlan         // Kế hoạch phát triển
- DevelopmentActivity     // Hoạt động phát triển
- TalentPool              // Nhóm nhân tài
- NineBoxGrid             // 9-box matrix
```

### 9-Box Grid

```
              HIGH POTENTIAL    MODERATE POTENTIAL    LIMITED POTENTIAL
            ┌─────────────────┬─────────────────────┬─────────────────┐
HIGH PERF   │  ★ STARS        │  High Professionals │ Trusted Prof.   │
            │  Future Leaders │  Keep engaged       │ Maximize value  │
            ├─────────────────┼─────────────────────┼─────────────────┤
MED PERF    │  Growth Emps    │  Core Players       │  Effective      │
            │  Accelerate dev │  Maintain/develop   │  Right role?    │
            ├─────────────────┼─────────────────────┼─────────────────┤
LOW PERF    │  Inconsistent   │  Up or Out          │  Talent Risk    │
            │  Coach/support  │  Performance plan   │  Exit strategy  │
            └─────────────────┴─────────────────────┴─────────────────┘
```

### Successor Readiness Levels

| Level | Description | Development Time |
|-------|-------------|------------------|
| Ready Now | Có thể đảm nhận ngay | 0-3 months |
| Ready 1 Year | Cần phát triển thêm | 6-12 months |
| Ready 2 Years | Pipeline tiềm năng | 12-24 months |
| Ready 3+ Years | Long-term potential | 24+ months |
| Not Ready | Gaps đáng kể | Significant development |

### API Endpoints (module design)

```
# Critical Positions
GET    /api/succession/critical-positions
POST   /api/succession/critical-positions
GET    /api/succession/critical-positions/:id
PUT    /api/succession/critical-positions/:id
POST   /api/succession/critical-positions/:id/assess-risk

# Talent Profiles
GET    /api/succession/talent-profiles
POST   /api/succession/talent-profiles
GET    /api/succession/talent-profiles/:employeeId
PUT    /api/succession/talent-profiles/:id

# Succession Plans
GET    /api/succession/plans/:id
POST   /api/succession/plans
POST   /api/succession/plans/:id/successors
PATCH  /api/succession/successors/:id/readiness
DELETE /api/succession/successors/:id

# Development Plans
POST   /api/succession/development-plans
POST   /api/succession/development-plans/:id/activities
PATCH  /api/succession/activities/:id/progress

# Talent Pools
POST   /api/succession/talent-pools
POST   /api/succession/talent-pools/:id/members

# 9-Box
POST   /api/succession/nine-box/assess
GET    /api/succession/nine-box/distribution

# Analytics
GET    /api/succession/analytics
GET    /api/succession/dashboard
```

---

## 🔧 Integration Notes

```bash
# 1) Merge schema additions into main prisma schema
# 2) Run migration in integrated app
npx prisma migrate dev

# 3) Wire module controllers/services into existing app router
# (adapting to current framework conventions)
```

---

## 📊 Prisma Schema Additions

```prisma
// Add to your schema.prisma

model CompensationCycle {
  id                    String   @id @default(uuid())
  name                  String
  fiscalYear            Int
  cycleType             String
  status                String
  totalBudget           Float
  currency              String   @default("VND")
  // ... other fields
}

model SalaryGrade {
  id             String  @id @default(uuid())
  code           String  @unique
  name           String
  level          Int
  minimumSalary  Float
  midpointSalary Float
  maximumSalary  Float
  // ... other fields
}

model CriticalPosition {
  id              String  @id @default(uuid())
  positionId      String
  criticality     String
  criticalityScore Int
  benchStrength   Int     @default(0)
  // ... other fields
}

model TalentProfile {
  id                String  @id @default(uuid())
  employeeId        String  @unique
  nineBoxPosition   String
  performanceRating Float
  potentialRating   Int
  flightRisk        String
  // ... other fields
}

model SuccessionPlan {
  id                  String  @id @default(uuid())
  criticalPositionId  String
  status              String
  targetReadyNowCount Int
  currentBenchStrength Int
  // ... other fields
}
```

---

## 📈 Integration with Existing Modules

### Performance Management
- Sync performance ratings to Talent Profiles
- Link reviews to Merit Matrix recommendations

### Recruitment (ATS)
- Source from Talent Pools
- Track internal vs external hires

### Learning (LMS)
- Link courses to Development Activities
- Track competency development

### Payroll
- Implement approved Compensation Adjustments
- Generate salary change records

---

## 🇻🇳 Vietnam-Specific Considerations

### Compensation
- VND currency support
- PIT (Personal Income Tax) integration
- Social insurance contribution tracking
- 13th month salary handling

### Succession
- Vietnamese naming conventions
- Local competency frameworks
- Cultural factors in talent assessment

---

## 📁 File Summary (current repository snapshot)

| File | Lines | Description |
|------|-------|-------------|
| compensation.types.ts | Domain types | Types, enums, interfaces |
| compensation.service.ts | Service layer | Compensation business logic |
| compensation.controller.ts | API layer | Compensation endpoints |
| succession.types.ts | Domain types | Types, enums, interfaces |
| succession.service.ts | Service layer | Succession business logic |
| succession.controller.ts | API layer | Succession endpoints |

Ghi chú: số dòng code thay đổi theo từng lần cập nhật, nên không cố định tổng LOC trong tài liệu này.

---

## 🎯 Product Maturity After Phase 5

| Module | Before | After |
|--------|--------|-------|
| Compensation Planning | 60% | **95%** |
| Succession Planning | 50% | **95%** |
| Overall HRM Completeness | 85% | **92%** |

---

## 📞 Support

LAC VIET HR - Enterprise Human Resource Management System
Version: 5.0
Last Updated: January 2026
