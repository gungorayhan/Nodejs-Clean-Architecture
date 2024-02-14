## adım 1 
user entities oluşturuldu

## adım 2 
user model oluturuldu ve adım 1 deki user entities burada kullanıldı

## adım 3 
interactors ve repository için interface yazacağız.<br/>
intreactors için fonksiyon şemamızı belirledik.(interface yazıldı)
repository için fonksiyon şemamızı belirledik.(interface yazıldı). login geri dönüş değeri farklı.

## adım 4
interactor oluşturuyoruz. class yazıyoruz ve IUserInteractor den implements ediyoruz

## adım 5
repository oluşturuyoruz. class yazıyoruz ve IUserRepository den implements ediyoruz

## adım 6
npm i inversify reflect-metadata

## adım 7
user controller oluşturuyoruz

## adım 8
dependency injection için import 'reflect-metadata' app dosyasında projeye dahil ediyoruz

## adım 9 
route dosyasını oluşturuyoruz

## adım 10 
useRouter dosyasında bir container yapısı oluşturacağz. bunun için inversify ı kullanacağız.
yazılan classlara bir bind işlemi uygulayacağız

## adım 11
utils klasöründe appConsts dosyası açıyoruz
