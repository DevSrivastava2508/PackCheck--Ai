function renderLoginPage() {
  return `
    <div class="sl-auth">
      <div class="sl-auth__card sl-reveal">

        <img class="sl-auth__emblem" src="assets/emblem-transparent.png" alt="State Emblem of India" />
        <span class="sl-auth__eyebrow">भारत सरकार &middot; Government of India</span>

        <h1>Access Console</h1>
        <p>Enter your department credentials to access the compliance enforcement console.</p>

        <form id="login-form" autocomplete="on">
          <div class="sl-field">
            <label for="login-email">Official Email</label>
            <input type="email" id="login-email" name="email" placeholder="officer@gov.in"
                   autocomplete="username" required />
          </div>
          <div class="sl-field">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" name="password" placeholder="••••••••••••"
                   autocomplete="current-password" required />
          </div>
          <button type="submit" class="sl-btn sl-btn--primary sl-auth__submit">
            Continue
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </form>

        <div class="sl-auth__divider">
          <p>Quick Demo Access (One-Click)</p>
          <div class="sl-demo-grid">
            <button type="button" id="btn-demo-officer" class="sl-demo-btn">
              <i data-lucide="user" class="w-4 h-4" style="color:var(--sl-blue)"></i> Field Officer
            </button>
            <button type="button" id="btn-demo-admin" class="sl-demo-btn">
              <i data-lucide="shield" class="w-4 h-4" style="color:var(--sl-saffron)"></i> System Admin
            </button>
          </div>
          <button type="button" id="btn-demo-mode" class="sl-demo-link">
            Enter Demo Mode (Pre-loaded Offline Mock Data)
          </button>
        </div>
      </div>
    </div>
  `;
}
