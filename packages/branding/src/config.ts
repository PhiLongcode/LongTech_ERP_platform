// ============================================================
// @vierp/branding — Central Branding Configuration
// ============================================================
//
// CÁC BƯỚC CÁ NHÂN HÓA CHO DOANH NGHIỆP:
// 1. Sửa file này với thông tin thương hiệu riêng
// 2. Chạy: npx ts-node scripts/rebrand.ts
// 3. Rebuild: turbo build
//
// STEPS TO CUSTOMIZE FOR YOUR BUSINESS:
// 1. Edit this file with your brand information
// 2. Run: npx ts-node scripts/rebrand.ts
// 3. Rebuild: turbo build
// ============================================================

export interface BrandConfig {
  // ─── Core Identity ─────────────────────────────────
  /** Tên nền tảng / Platform name */
  platform: {
    name: string;
    shortName: string;
    tagline: {
      vi: string;
      en: string;
    };
    description: {
      vi: string;
      en: string;
    };
    version: string;
  };

  // ─── Company Info ──────────────────────────────────
  /** Thông tin công ty / Company information */
  company: {
    name: string;
    legalName: string;
    taxCode: string;
    website: string;
    supportEmail: string;
    noReplyEmail: string;
  };

  // ─── Visual Identity ───────────────────────────────
  /** Nhận diện thương hiệu / Visual branding */
  visual: {
    logoPath: string;
    faviconPath: string;
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };

  // ─── Technical ─────────────────────────────────────
  /** Cấu hình kỹ thuật / Technical configuration */
  technical: {
    /** npm scope prefix: "@yourscope/" */
    npmScope: string;
    /** API key prefix: "yourprefix_live_" */
    apiKeyPrefix: string;
    /** Docker registry */
    dockerRegistry: string;
    /** K8s namespace */
    k8sNamespace: string;
    /** Event subject prefix: "yourprefix.module.event" */
    eventPrefix: string;
    /** Domain */
    domain: string;
    /** Database name prefix */
    dbPrefix: string;
    /** Cookie/storage key prefix */
    storagePrefix: string;
    /** GitHub org/user */
    githubOrg: string;
    /** S3 bucket prefix */
    s3Prefix: string;
  };

  // ─── AI Provider ───────────────────────────────────
  /** Cấu hình AI / AI provider config */
  ai: {
    /** Tên hiển thị AI trợ lý / AI assistant display name */
    assistantName: {
      vi: string;
      en: string;
    };
    /** Provider name (for display, not code) */
    providerLabel: string;
  };

  // ─── Legal ─────────────────────────────────────────
  /** Pháp lý / Legal notices */
  legal: {
    copyright: string;
    license: string;
  };
}

// ─── Default: ERP LONGTECH (Open-Source Fork) ─────────────────

export const DEFAULT_BRAND: BrandConfig = {
  platform: {
    name: "ERP LONGTECH",
    shortName: "LONGTECH",
    tagline: {
      vi: "Nền tảng quản trị doanh nghiệp hiện đại và linh hoạt",
      en: "Modern and flexible enterprise management platform",
    },
    description: {
      vi: "Nền tảng ERP mã nguồn mở, kế thừa từ VietERP và được tùy biến cho LONGTECH",
      en: "Open-source ERP platform based on VietERP and customized for LONGTECH",
    },
    version: "1.0.0",
  },

  company: {
    name: "LONGTECH",
    legalName: "LONGTECH Technology Co., Ltd.",
    taxCode: "Updating",
    website: "https://longtech.vn",
    supportEmail: "support@longtech.vn",
    noReplyEmail: "noreply@longtech.vn",
  },

  visual: {
    logoPath: "/assets/logo.svg",
    faviconPath: "/assets/favicon.ico",
    colors: {
      primary: "#2563eb",
      secondary: "#7c3aed",
      accent: "#059669",
    },
  },

  technical: {
    npmScope: "@longtech",
    apiKeyPrefix: "longtech_live_",
    dockerRegistry: "registry.longtech.vn",
    k8sNamespace: "longtech-system",
    eventPrefix: "longtech",
    domain: "longtech.vn",
    dbPrefix: "longtech",
    storagePrefix: "longtech",
    githubOrg: "longtech",
    s3Prefix: "longtech-files",
  },

  ai: {
    assistantName: {
      vi: "Trợ lý AI / AI Assistant",
      en: "AI Assistant",
    },
    providerLabel: "AI",
  },

  legal: {
    copyright: `© ${new Date().getFullYear()} LONGTECH. All rights reserved.`,
    license: "MIT",
  },
};

// ─── Load brand (supports env override) ──────────────────────

let _brand: BrandConfig = DEFAULT_BRAND;

export function setBrand(config: Partial<BrandConfig>): void {
  _brand = deepMerge(DEFAULT_BRAND, config) as BrandConfig;
}

export function getBrand(): BrandConfig {
  return _brand;
}

// Deep merge helper
function deepMerge(target: any, source: any): any {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}
