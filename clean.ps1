$file = "x:\projects\aos-redesign-mockup\index.html"
$content = Get-Content $file -Raw

# Replace hardcoded values with empty values
$content = $content -replace 'value="danaa"', 'value=""'
$content = $content -replace 'value="dana"', 'value=""'
$content = $content -replace 'value="\+628574734535"', 'value=""'
$content = $content -replace 'value="HIPMI"', 'value=""'
$content = $content -replace 'value="Harta Putera \(HPE\)"', 'value=""'
$content = $content -replace 'value="PT Harta Putera Epik"', 'value=""'
$content = $content -replace 'value="3"', 'value=""'
$content = $content -replace 'value="2"', 'value=""'
$content = $content -replace 'value="25"', 'value=""'
$content = $content -replace 'value="021-88992211"', 'value=""'
$content = $content -replace 'value="https://hartaputera.id"', 'value=""'
$content = $content -replace 'value="Ketergantungan operasional pada founder tinggi"', 'value=""'
$content = $content -replace 'value="Belum memiliki SOP tertulis yang terstandarisasi"', 'value=""'
$content = $content -replace 'value="Pencatatan keuangan masih manual & belum PSAK"', 'value=""'
$content = $content -replace 'value="Aplikasi SaaS Manajemen Keuangan"', 'value=""'
$content = $content -replace 'value="@hartaputera.id"', 'value=""'
$content = $content -replace 'value="Paket Premium"', 'value=""'
$content = $content -replace 'value="500000"', 'value=""'
$content = $content -replace 'value="1500000"', 'value=""'
$content = $content -replace 'value="Paket Starter"', 'value=""'
$content = $content -replace 'value="150000"', 'value=""'
$content = $content -replace 'value="450000"', 'value=""'

# Remove selected attributes
$content = $content -replace '(?i)<option([^>]+)selected([^>]*)>', '<option$1$2>'
$content = $content -replace '(?i)<option([^>]+)selected>', '<option$1>'

Set-Content $file -Value $content -Encoding UTF8
