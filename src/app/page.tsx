import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="bg-dark">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <span className="font-mono text-lg font-bold tracking-[4px] text-cream">
            FREEWAY
          </span>
          <div className="flex items-center gap-8">
            <a
              href="#method"
              className="hidden md:block text-sm text-olive hover:text-cream transition-colors"
            >
              方法
            </a>
            <a
              href="#story"
              className="hidden md:block text-sm text-olive hover:text-cream transition-colors"
            >
              故事
            </a>
            <a
              href="#pricing"
              className="hidden md:block text-sm text-olive hover:text-cream transition-colors"
            >
              价格
            </a>
            <a
              href="#cta"
              className="bg-olive text-cream text-sm font-semibold px-5 py-2 rounded-full hover:bg-olive-light transition-colors"
            >
              开始自由
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-dark">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 md:pt-[100px] pb-16 md:pb-20">
          <div className="flex flex-col gap-10 max-w-2xl">
            <div className="inline-flex">
              <span className="text-olive text-[13px] font-medium px-4 py-1.5 rounded-full border border-olive bg-olive/[0.125]">
                已有 12,847 人成功戒烟
              </span>
            </div>
            <h1 className="font-serif text-cream text-5xl md:text-[80px] leading-[1.1]">
              拿回你的自由。
            </h1>
            <p className="text-olive text-lg leading-[1.6] max-w-[600px]">
              不靠意志力，不靠痛苦。通过认知觉醒，
              <br className="hidden md:block" />
              让你从&ldquo;戒烟者&rdquo;变成&ldquo;从不需要烟的人&rdquo;。
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#cta"
                className="bg-olive text-cream text-base font-semibold px-8 py-3.5 rounded-full hover:bg-olive-light transition-colors"
              >
                免费开始觉醒之旅
              </a>
              <a
                href="#method"
                className="text-olive text-base font-medium px-8 py-3.5 rounded-full border border-olive hover:bg-olive/10 transition-colors"
              >
                了解方法
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-[100px]">
          <div className="flex flex-col gap-12 md:gap-[60px]">
            <div className="flex flex-col gap-4">
              <span className="text-olive text-xs font-semibold tracking-[3px]">
                THE TRAP
              </span>
              <h2 className="font-serif text-foreground text-3xl md:text-5xl leading-[1.2]">
                你不是意志力不强，
                <br />
                你只是被骗了。
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-[20px] p-7 md:p-8 border border-border flex flex-col gap-4">
                <span className="font-mono text-sm text-olive">01</span>
                <h3 className="font-serif text-foreground text-2xl">
                  尼古丁陷阱
                </h3>
                <p className="text-olive text-sm leading-[1.7]">
                  尼古丁制造了一个虚假的&ldquo;需要&rdquo;，然后假装满足它。你以为是享受，其实只是在消除戒断反应。
                </p>
              </div>
              <div className="bg-white rounded-[20px] p-7 md:p-8 border border-border flex flex-col gap-4">
                <span className="font-mono text-sm text-olive">02</span>
                <h3 className="font-serif text-foreground text-2xl">
                  意志力幻觉
                </h3>
                <p className="text-olive text-sm leading-[1.7]">
                  传统方法要你&ldquo;忍&rdquo;，但忍只会让你更渴望。这不是你的意志力问题，是方法错了。
                </p>
              </div>
              <div className="bg-white rounded-[20px] p-7 md:p-8 border border-border flex flex-col gap-4">
                <span className="font-mono text-sm text-olive">03</span>
                <h3 className="font-serif text-foreground text-2xl">
                  身份困境
                </h3>
                <p className="text-olive text-sm leading-[1.7]">
                  &ldquo;我是一个正在戒烟的人&rdquo; —
                  这个身份本身就是陷阱。它意味着你在失去什么。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="bg-dark">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-[100px]">
          <div className="flex flex-col gap-12 md:gap-[60px]">
            <div className="flex flex-col gap-4">
              <span className="text-olive text-xs font-semibold tracking-[3px]">
                THE METHOD
              </span>
              <h2 className="font-serif text-cream text-3xl md:text-5xl leading-[1.2]">
                四个阶段，回归自由。
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              <div className="bg-card-dark rounded-[20px] p-6 md:p-7 border border-card-dark-border flex flex-col gap-3">
                <span className="font-mono text-xs text-olive">01</span>
                <h3 className="font-serif text-cream text-[22px]">觉醒期</h3>
                <p className="text-olive text-[13px] leading-[1.6]">
                  理解陷阱
                  <br />
                  消除恐惧
                </p>
              </div>
              <div className="bg-card-dark rounded-[20px] p-6 md:p-7 border border-card-dark-border flex flex-col gap-3">
                <span className="font-mono text-xs text-olive">02</span>
                <h3 className="font-serif text-cream text-[22px]">准备期</h3>
                <p className="text-olive text-[13px] leading-[1.6]">
                  身份宣言
                  <br />
                  环境清理
                </p>
              </div>
              <div className="bg-card-dark rounded-[20px] p-6 md:p-7 border border-card-dark-border flex flex-col gap-3">
                <span className="font-mono text-xs text-olive">03</span>
                <h3 className="font-serif text-cream text-[22px]">行动期</h3>
                <p className="text-olive text-[13px] leading-[1.6]">
                  身份强化
                  <br />
                  替代仪式
                </p>
              </div>
              <div className="bg-olive-light rounded-[20px] p-6 md:p-7 flex flex-col gap-3">
                <span className="font-mono text-xs text-cream/80">04</span>
                <h3 className="font-serif text-cream text-[22px]">自由期</h3>
                <p className="text-cream/80 text-[13px] leading-[1.6]">
                  巩固身份
                  <br />
                  帮助他人
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-[100px]">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-[60px]">
            <div className="flex flex-col gap-6 flex-1">
              <p className="font-serif text-foreground text-xl md:text-2xl italic leading-[1.5]">
                &ldquo;我抽了20年烟。无数次戒烟，无数次失败。直到我不再&lsquo;戒&rsquo;了——
                <br />
                我只是拿回了属于我的自由。&rdquo;
              </p>
              <span className="text-olive text-sm font-semibold">
                — 佟晓峰，FREEWAY 创始人
              </span>
            </div>
            <div className="flex flex-col items-center gap-6 w-full md:w-[300px] shrink-0">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                <Image
                  src="/founder-avatar.png"
                  alt="佟晓峰"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 w-full">
                <div className="flex flex-col items-center gap-1 flex-1">
                  <span className="font-mono text-foreground text-xl">
                    12,847
                  </span>
                  <span className="text-olive text-xs">成功用户</span>
                </div>
                <div className="flex flex-col items-center gap-1 flex-1">
                  <span className="font-mono text-foreground text-xl">
                    94%
                  </span>
                  <span className="text-olive text-xs">成功率</span>
                </div>
                <div className="flex flex-col items-center gap-1 flex-1">
                  <span className="font-mono text-foreground text-xl">47</span>
                  <span className="text-olive text-xs">平均天数</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="bg-dark">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-[120px] flex flex-col items-center gap-8">
          <h2 className="font-serif text-cream text-4xl md:text-[64px] text-center">
            你准备好了吗？
          </h2>
          <p className="text-olive text-lg leading-[1.6] text-center">
            每天不到一支烟的钱，换回一生的自由。
            <br />
            7天免费试用，随时取消。
          </p>
          <a
            href="#"
            className="bg-olive text-cream text-lg font-semibold px-10 py-4 rounded-full hover:bg-olive-light transition-colors"
          >
            免费开始觉醒之旅
          </a>
          <span className="text-[#666666] text-sm">
            已有 12,847 人成功拿回自由
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer id="pricing" className="bg-dark border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-[60px] pb-10 flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-cream text-base font-bold tracking-[4px]">
              FREEWAY
            </span>
            <span className="font-serif text-olive text-sm italic">
              拿回你的自由
            </span>
            <span className="text-[#444444] text-xs mt-4">
              &copy; 2026 FREEWAY. All rights reserved.
            </span>
          </div>
          <div className="flex gap-16 md:gap-20">
            <div className="flex flex-col gap-3">
              <span className="text-olive text-[11px] font-semibold tracking-[2px]">
                PRODUCT
              </span>
              <a
                href="#method"
                className="text-[#666666] text-[13px] hover:text-cream transition-colors"
              >
                方法
              </a>
              <a
                href="#pricing"
                className="text-[#666666] text-[13px] hover:text-cream transition-colors"
              >
                价格
              </a>
              <a
                href="#"
                className="text-[#666666] text-[13px] hover:text-cream transition-colors"
              >
                常见问题
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-olive text-[11px] font-semibold tracking-[2px]">
                COMPANY
              </span>
              <a
                href="#story"
                className="text-[#666666] text-[13px] hover:text-cream transition-colors"
              >
                关于我们
              </a>
              <a
                href="#"
                className="text-[#666666] text-[13px] hover:text-cream transition-colors"
              >
                隐私政策
              </a>
              <a
                href="#"
                className="text-[#666666] text-[13px] hover:text-cream transition-colors"
              >
                使用条款
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
