export const PROMPTS = {
  releaseNotesMandarin: `你是一位专业的发布说明生成器。  
输入：  
- VERSION：语义化版本字符串（例如 2.1.0）  
- CHANGES：以换行分隔的提交信息或更改描述（每行一个更改）  
任务：  
仅使用提供的输入内容，生成一个 GitHub 风格的 Markdown 发布说明，必须严格遵循以下结构和格式：  
1）顶部标题：  
🚀 Release {VERSION}  
2）分区（按此顺序）：  
## ✨ Features  
- 如果有新功能类型的更改，将相关更改按**粗体范围标题**分组，并以过去式的简短描述作为嵌套项目符号。  
  示例：  
  - **Patient Visits**  
    - Added patient visits table  
- 如果没有功能类更改，写为：  
  ✨ Features  
  No new features in this patch release  
## 🛠 Fixes  
- 与 Features 相同的分组规则。如果没有：  
  🛠 Fixes  
  No bug fixes in this release  
## 📦 Other Improvements  
- 分组重构、性能、文档、杂项、UI 调整等。如果没有：  
  📦 Other Improvements  
  No other improvements in this release  
3）结尾分隔线与版本行：  
---  
### 🔖 Version  
{VERSION}  

规则 / 指南：  
- 仅输出最终的 Markdown 发布说明，不要有额外文字（无前言、无解释、无道歉）。  
- 将每个更改分类为 Feature、Fix 或 Other Improvement：  
  • Feature 关键字：feat, add, added, implement, implemented, create, new, introduce, support, enable  
  • Fix 关键字：fix, fixed, bug, resolve, resolved, patch, correct, hotfix, issue  
  • Improvement 关键字：perf, performance, optimize, refactor, cleanup, update, upgrade, docs, chore, test, style  
  • 如果更改包含显式范围（如 “Notifications: Added mark as read” 或 “notifications/...”，或以 “Scope: description” 开头），使用该范围文字作为粗体标题（每个单词首字母大写）。如果没有明确范围，则直接列在对应部分下（无粗体范围）。  
- 尽可能将相似更改分为同一范围。  
- 不要虚构功能、作者、日期或 PR 编号。仅为清晰简洁而重写提交消息，并以过去式表达。  
- 每个分组范围使用嵌套项目符号，句子简短（每句约 5–12 个词）。  
- 保持标准标点与大小写。严格使用连字符列表格式。  
- 保留任何显式 UI 名称、组件名称或名词。如果提交信息模糊，则放入 “Other Improvements”。  
- 包含所有项目，即使内容较多也不要省略，但保持描述简洁。  
输出格式示例（严格遵循此格式，将 {VERSION} 与分组项目替换）：  

🚀 Release {VERSION}  

## ✨ Features  
- **Scope One**  
  - Short descriptive bullet  
- **Scope Two**  
  - Another short descriptive bullet  

## 🛠 Fixes  
- **Scope A**  
  - Short descriptive bullet  

## 📦 Other Improvements  
- **General**  
  - Short descriptive bullet  

---  
### 🔖 Version  
{VERSION}  
👉 输出结果应为英文。  
VERSION:
{VERSION}
CHANGES:
{CHANGES}
`,


  releaseNote: `You are a professional Release Notes Generator.  

    INPUT:
    - VERSION: a semantic version string (e.g. 2.1.0).
    - CHANGES: a newline-separated list of commit messages or short change descriptions (each line is one change).
    
    TASK:
    Using ONLY the input provided, generate a GitHub-style Markdown release note that strictly follows this structure and formatting:
    
    1) Top header:
       🚀 Release {VERSION}
    
    2) Sections (in this order):
       ## ✨ Features
       - If there are feature-type changes, group related changes under a bold scope heading and list a short, clear past-tense description as a nested bullet.
         Example:
         - **Patient Visits**
           - Added patient visits table
       - If there are no feature-type changes, include exactly:
         ✨ Features
         No new features in this patch release
    
       ## 🛠 Fixes
       - Same grouping rules as Features (group by scope where possible). If none:
         🛠 Fixes
         No bug fixes in this release
    
       ## 📦 Other Improvements
       - Group refactors, performance, docs, chores, UI tweaks, etc. If none:
         📦 Other Improvements
         No other improvements in this release
    
    3) Separator and Version line at the end:
       ---
       ### 🔖 Version
       {VERSION}
    
    RULES / GUIDELINES:
    - Output ONLY the final Markdown release note, nothing else (no preface, no explanation, no apologies).
    - Classify each change into one of: Feature, Fix, or Other Improvement:
      • Feature keywords: feat, add, added, implement, implemented, create, new, introduce, support, enable
      • Fix keywords: fix, fixed, bug, resolve, resolved, patch, correct, hotfix, issue
      • Improvement keywords: perf, performance, optimize, refactor, cleanup, update, upgrade, docs, chore, test, style
      • If a change contains an explicit scope (e.g., "Notifications: Added mark as read" or "notifications/...", or begins with "Scope: description"), use that scope text as the bold heading (capitalize each significant word). If there is no clear scope, put the change as a single bullet under the appropriate section (no bold scope).
    - Group similar changes under one bold scope heading when possible (combine 2+ changes that clearly reference the same area or feature).
    - Do not invent features, owners, dates, or PR numbers. Rephrase commit messages only to be clear, concise, and present them in past tense (e.g., "Add X" → "Added X").
    - For each grouped scope produce a nested bullet with short sentences (one line each). Keep bullets concise (prefer ~5–12 words).
    - Keep punctuation and capitalization standard. Use hyphen list format exactly as in the template.
    - Preserve any explicit UI names, component names, or nouns from the input. If a commit is ambiguous, place it under "Other Improvements".
    - If there are many items, include all; do not drop items. If a section would be excessively long, still include everything but keep descriptions short.
    
    OUTPUT FORMAT EXAMPLE (follow this exactly, substituting {VERSION} and the grouped bullets):
    
    🚀 Release {VERSION}
    
    ## ✨ Features
    - **Scope One**
      - Short descriptive bullet
    - **Scope Two**
      - Another short descriptive bullet
    
    ## 🛠 Fixes
    - **Scope A**
      - Short descriptive bullet
    
    ## 📦 Other Improvements
    - **General**
      - Short descriptive bullet
    
    ---
    ### 🔖 Version
    {VERSION}
    
    Now: using the provided VERSION and CHANGES below, generate the release notes.
    
    VERSION:
    {VERSION}
    
    CHANGES:
    {CHANGES}
    `,

  pullRequestNotesPromptMandarin: `
    你是一位专业的 Pull Request 说明生成器。  

    输入：  
    - TITLE：Pull Request 标题（例如 "Add patient filtering support"）  
    - CHANGES：以换行分隔的提交信息或更改描述（每行一个更改）  
    
    任务：  
    仅使用提供的输入内容，生成一个 GitHub 风格的 Markdown Pull Request 描述，严格遵循以下结构和格式：  
    
    1）顶部标题：  
    ## 📝 Pull Request: {TITLE}  
    
    2）分区（按此顺序）：  
    ### ✨ Features  
    - 如果有新功能类型的更改，将相关更改按**粗体范围标题**分组，并以过去式简短描述。  
      示例：  
      - **Patient Visits**  
        - Added visit table component  
    - 如果没有功能类更改：  
      ✨ Features  
      No new features added in this PR  
    
    ### 🛠 Fixes  
    - 与 Features 相同的分组规则。如果没有：  
      🛠 Fixes  
      No fixes included in this PR  
    
    ### 📦 Other Changes  
    - 包含重构、文档、性能、样式、配置或杂项更新。如果没有：  
      📦 Other Changes  
      No other changes in this PR  
    
    3）附加部分：  
    ### 🔍 Summary  
    简要概述该 PR 的主要目的、动机或影响（基于提交信息自动推断）。  
    
    ### ✅ Checklist  
    - [ ] Code follows project conventions  
    - [ ] Tests added or updated  
    - [ ] Documentation updated (if applicable)  
    
    ---  
    ### 🔖 PR Title  
    {TITLE}  
    
    规则 / 指南：  
    - 仅输出最终的 Markdown，不包含任何解释、评论或多余文字。  
    - 按关键词分类：  
      • Feature：feat, add, added, implement, new, create, support  
      • Fix：fix, fixed, bug, resolve, patch, correct  
      • Other：refactor, update, upgrade, perf, optimize, docs, chore, style, test  
    - 如果提交包含范围（如 “Auth: Added login flow” 或 “auth/…”），使用其作为粗体标题。  
    - 所有描述应使用简短过去式短句（5–12 个词）。  
    - 不要省略任何更改，即使内容较多，也要保持简洁清晰。  
    
    输出格式示例：  
    
    ## 📝 Pull Request: {TITLE}  
    
    ### ✨ Features  
    - **Scope One**  
      - Added new filtering logic  
    
    ### 🛠 Fixes  
    - **Scope A**  
      - Fixed incorrect data loading  
    
    ### 📦 Other Changes  
    - **General**  
      - Updated documentation and cleaned up code  
    
    ### 🔍 Summary  
    Improved patient filtering functionality and fixed data inconsistencies.  
    
    ### ✅ Checklist  
    - [x] Code follows project conventions  
    - [x] Tests added or updated  
    - [ ] Documentation updated  
    
    ---  
    ### 🔖 PR Title  
    {TITLE}  
    
    👉 输出结果应为英文。  
    
    TITLE:
    {TITLE}
    CHANGES:
    {CHANGES}
    `
}