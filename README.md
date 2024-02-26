# PHP & REACT JS CRUD
## Software Requirements
- XAMPP
- VS Code

### Add the following rule in your httpd-userdir.conf
** <Directory "C:/Users/*/My Documents/My Website">
    AllowOverride FileInfo AuthConfig Limit Indexes
    Options MultiViews Indexes SymLinksIfOwnerMatch IncludesNoExec
        <Limit GET POST OPTIONS DELETE PUT>
        Order allow,deny
        Allow from all
    </Limit>
    <LimitExcept GET POST OPTIONS DELETE PUT>
        Order deny,allow
        Deny from all
    </LimitExcept>
</Directory>