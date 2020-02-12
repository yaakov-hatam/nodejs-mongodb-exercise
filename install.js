const websites = [
    "ckmisrael.co.il",
    "ckp.co.il",
    "cky.co.il",
    "cl-il.co.il",
    "cl-markets.co.il",
    "cl-sys.co.il",
    "cla.co.il",
    "claas.co.il",
    "clad-stone.co.il",
    "cladex-max.co.il",
    "claimit.co.il",
    "claims.co.il",
    "claims.org.il",
    "claimscon.co.il",
    "claire.co.il",
    "clairerabin.co.il",
    "clalcom.co.il",
    "clalit-global.co.il",
    "clalit.co.il",
    "clalit.org.il",
    "clalitaesthetics.co.il",
    "clalitsmile.co.il",
    "clap.co.il",
    "clarakichel.co.il",
    "clarionhotel.co.il",
    "clariter.co.il",
    "clariti.co.il",
    "clarysage.co.il",
    "clasa.co.il",
    "clasica.co.il",
    "clasikaletet.co.il",
    "class-a-studio.co.il",
    "class-a.co.il",
    "class4u.co.il",
    "classa.co.il",
    "classaction.org.il",
    "classactions.co.il",
    "classads.co.il",
    "classboost.co.il",
    "classcig.co.il",
    "classdelet.co.il",
    "classee.co.il",
    "classenti.co.il",
    "classeq.co.il",
    "classes.co.il",
    "classi.co.il",
    "classica-asher.co.il",
    "classica.co.il",
    "classicadecor.co.il",
    "classiccar.co.il",
    "classicdress.co.il",
    "classicglass.co.il",
    "classico.co.il",
    "classics.co.il",
    "classictravel.co.il",
    "classicy.co.il",
    "classinteract.co.il",
    "classmachine.co.il",
    "classpass.co.il",
    "classytown.co.il",
    "claudedadia.co.il",
    "claudiakraus.co.il",
    "claudio.co.il",
    "claudios-net.co.il",
    "clauzar.co.il",
    "clavlove.co.il",
    "clavmed.co.il",
    "clay.co.il",
    "clayart.co.il",
    "clayground.co.il",
    "clb.co.il",
    "clct.co.il",
    "clean-barak.co.il",
    "clean-carpet.co.il",
    "clean-carpets.co.il",
    "clean-clean.co.il",
    "clean-clear.co.il",
    "clean-electric.co.il",
    "clean-filter.co.il",
    "clean-house.co.il",
    "clean-it.co.il",
    "clean-pro.co.il",
    "clean-rooms.co.il",
    "clean-serve.co.il",
    "clean-service.co.il",
    "clean-tech.co.il",
    "clean-up.co.il",
    "clean-view.co.il",
    "clean-wipe.co.il",
    "clean.co.il",
    "clean.org.il",
    "clean4me.co.il",
    "cleanactive.co.il",
    "cleanair.co.il",
    "cleanbay.co.il",
    "cleancarpet.co.il",
    "cleancity.co.il",
    "cleanclean.co.il",
    "cleancopy.co.il",
    "cleancor.co.il",
    "cleandesk.co.il",
    "cleandress.co.il",
    "cleanenergy.co.il",
    "cleaner.co.il",
    "cleaner.org.il",
    "cleanergy.co.il",
    "cleanershp.co.il",
    "cleanet.co.il",
    "cleanetica.co.il",
    "cleanext.co.il",
    "cleanfix.co.il",
    "cleangrass.co.il",
    "cleanhead.co.il",
    "cleaniks.co.il",
    "cleaning-company.co.il",
    "cleaning-service.co.il",
    "cleaning-services.co.il",
    "cleaning-solar-panels.co.il",
    "cleaning.co.il",
    "cleaning.org.il",
    "cleaning365.co.il",
    "cleaningcompanies.co.il",
    "cleaningcompany.co.il",
    "cleaninghouses.co.il",
    "cleaningservice.co.il",
    "cleaningservices.co.il",
    "cleaningsofas.co.il",
    "cleanix.co.il",
    "cleankeys.co.il",
    "cleanliness.co.il",
    "cleanmachine.co.il",
    "cleanmaster.co.il",
    "cleanme.co.il",
    "cleann.co.il",
    "cleanofficefilter.co.il",
    "cleanomat.co.il",
    "cleanor.co.il",
    "cleanp.co.il",
    "cleanpack.co.il",
    "cleanpanel.co.il",
    "cleanpart.co.il",
    "cleanpolish.co.il",
    "cleanpro.co.il",
    "cleanrooms.co.il",
    "cleanrooms.org.il",
    "cleanshop.co.il",
    "cleanskin.co.il",
    "cleanstar.co.il",
    "cleantechcurve.co.il",
    "cleanternet.co.il",
    "cleanton.co.il",
    "cleanwater.co.il",
    "cleanx.co.il",
    "clear-cut.co.il",
    "clear-designs.co.il",
    "clear-future.co.il",
    "clear-line.co.il",
    "clear-menu.co.il",
    "clear-team.co.il",
    "clear.co.il",
    "clear2all.co.il",
    "clear4web.co.il",
    "clearance.co.il",
    "clearblue.co.il",
    "clearbox.co.il",
    "clearcut.co.il",
    "clearenergy.co.il",
    "clearfinance.co.il",
    "clearfuture.co.il",
    "clearglass.co.il",
    "clearguard.co.il",
    "clearhouse.co.il",
    "clearing.co.il",
    "clearing111.co.il",
    "clearing4u.co.il",
    "clearlift.co.il",
    "clearline.co.il",
    "clearnet.co.il",
    "clearoptic.co.il",
    "clearpools.co.il",
    "clearsmile.co.il",
    "clearteam.co.il",
    "cleartech.co.il",
    "clearview.co.il",
    "clearvoice.co.il",
    "clearwater.co.il",
    "clek.co.il",
    "clemantina.co.il",
    "clen.co.il",
    "cleo-c.co.il",
    "cleo.co.il",
    "cleopatra-center.co.il",
    "cleopatra.org.il",
    "cleopatrashow.co.il",
    "clever-storage.co.il",
    "clever-tech.co.il",
    "cleverclean.co.il",
    "clevershop.co.il",
    "cleversign.co.il",
    "clevertools.co.il",
    "clevervision.co.il",
    "clfb.org.il",
    "clg.co.il",
    "clic.co.il",
    "clic.org.il",
    "clicads.co.il",
    "clicar.co.il",
    "click-art.co.il",
    "click-clean.co.il",
    "click-date.co.il",
    "click-delivery.co.il",
    "click-here.co.il",
    "click-it.co.il",
    "click-lock.co.il",
    "click-now.co.il",
    "click-print.co.il",
    "click-savi.org.il",
    "click-translation.co.il",
    "click.co.il",
    "click.org.il",
    "click1.co.il",
    "click2dance.co.il",
    "click2fix.co.il",
    "click2get.co.il",
    "click2love.co.il",
    "click2pay.co.il",
    "click2photo.co.il",
    "click2print.co.il",
    "click2save.co.il",
    "click4.co.il",
    "click4biz.co.il",
    "click4fun.co.il",
    "click4me.co.il",
    "click4price.co.il",
    "click4taxi.co.il",
    "click4u.co.il",
    "click4visa.co.il",
    "clicka.co.il",
    "clickad.co.il",
    "clickandgo.co.il",
    "clickatable.co.il",
    "clickbaby.co.il",
    "clickbiz.co.il",
    "clickcandy.co.il",
    "clickchic.co.il",
    "clickclub.co.il",
    "clickdj.co.il",
    "clickeat.co.il",
    "clicker.co.il",
    "clickerman.co.il",
    "clickfind.info",
    "clickfix.co.il",
    "clickforcover.co.il",
    "clickgo.co.il",
    "clickhere.co.il",
    "clickhotel.co.il",
    "clickim.co.il",
    "clickit.co.il",
    "clickl.co.il",
    "clicklock.co.il",
    "clickmaker.co.il",
    "clickmall.co.il",
    "clickmarketing.co.il",
    "clickmassage.co.il",
    "clickme.co.il",
    "clickmedia.co.il",
    "clicknow.co.il",
    "clickon.co.il",
    "clickone.co.il",
    "clickonline.co.il",
    "clickos.co.il",
    "clickparty.co.il",
    "clickpic.co.il",
    "clickpro.co.il",
    "clickship.co.il",
    "clicksinternet.co.il",
    "clickspa.co.il",
    "clickswap.co.il",
    "clicktack.co.il",
    "clicktaxi.co.il",
    "clicktick.co.il",
    "clicktotravel.co.il",
    "clicktracks.co.il",
    "clicktravel.co.il",
    "clickview.co.il",
    "clickvisa.co.il",
    "clickwise.co.il",
    "client-side.co.il",
    "client.co.il",
    "clientello.co.il",
    "clientscenter.co.il",
    "clientura.co.il",
    "cliff.co.il",
    "clift.co.il",
    "clik4.co.il",
    "clil.co.il",
    "clil.org.il",
    "clila.co.il",
    "clima.co.il",
    "climate.org.il",
    "climateck.co.il",
    "climaton.co.il",
    "climax-design.co.il",
    "climax-il.co.il",
    "climax.co.il",
    "climbing.org.il",
    "climbingwall.co.il",
    "climma.co.il",
    "clin.co.il",
    "clinait.co.il",
    "clineral.co.il",
    "clini.co.il",
    "clinic.co.il",
    "clinic2u.co.il",
    "clinic360.co.il",
    "clinicafe.co.il",
    "clinical.co.il",
    "clinicalc.co.il",
    "clinicaonline.co.il",
    "clinicare.co.il",
    "cliniccompare.co.il",
    "clinickal.co.il",
    "cliniclicks.co.il",
    "clinicor.co.il",
    "clinicsisrael.co.il",
    "clinident.co.il",
    "clinik.co.il",
    "clinika.co.il",
    "clinikids.co.il",
    "clinique.co.il",
    "clink.co.il",
    "clinlife.co.il",
    "clinuvel.co.il",
    "clinvest.co.il",
    "clip-air.co.il",
    "clip-it.co.il",
    "clip-nolad.co.il",
    "clip-plus.co.il",
    "clip-up.co.il",
    "clip.co.il",
    "clip1.co.il",
    "clip4you.co.il",
    "clipa.co.il",
    "clipair.co.il",
    "clipart.co.il",
    "clipat.co.il",
    "clipclap.co.il",
    "cliper.co.il",
    "cliphair.co.il",
    "clipic.co.il",
    "clipim.co.il",
    "cliplay.co.il",
    "clipli.co.il",
    "clipmadlik.co.il",
    "clipo.co.il",
    "clipot.co.il",
    "clipp.co.il",
    "clipped.co.il",
    "clipperisrael.co.il",
    "clipphone.co.il",
    "clippim.co.il",
    "clipro.co.il",
    "clipsal.co.il",
    "clipsong.co.il",
    "clipsonit.co.il",
    "clipstick.co.il",
    "cliptomania.co.il",
    "cliptv.co.il",
    "clipx.co.il",
    "cliqa.co.il",
    "clive.co.il",
    "clix.co.il",
    "cll.co.il",
    "cllaw.co.il",
    "clmarkets.co.il",
    "cln.co.il",
    "clo.co.il",
    "clockit.co.il",
    "clocks.co.il",
    "clockwork.co.il",
    "cloe.co.il",
    "clore-foundation.org.il",
    "clos.co.il",
    "close-to-heart.co.il",
    "close.co.il",
    "close2me.co.il",
    "close2u.co.il",
    "closebuy.co.il",
    "closet-systems.co.il",
    "closets.co.il",
    "closeupmagic.co.il",
    "closeupstudio.co.il",
    "closure.co.il",
    "clothes.co.il",
    "cloud-backup.co.il",
    "cloud-c.co.il",
    "cloud-computing.org.il",
    "cloud-hosting.co.il",
    "cloud-me.co.il",
    "cloud-services.co.il",
    "cloud-up.co.il",
    "cloud.co.il",
    "cloud247.co.il",
    "cloud2me.co.il",
    "cloud360.co.il",
    "cloud4b.co.il",
    "cloud4biz.co.il",
    "cloud4u.co.il",
    "cloud7.co.il",
    "cloudance.co.il",
    "cloudapps.co.il",
    "cloudbackup.co.il",
    "cloudbase.co.il",
    "cloudcom.co.il",
    "cloudcomputing.co.il",
    "cloudcomputing.org.il",
    "cloudcomputing4u.co.il",
    "cloudcon.co.il",
    "cloudfit.co.il",
    "cloudhost.co.il",
    "cloudi.co.il",
    "cloudios.co.il",
    "cloudisrael.co.il",
    "cloudlogic.co.il",
    "cloudmail.co.il",
    "cloudme.co.il",
    "cloudmentor.co.il",
    "cloudnclear.co.il",
    "cloudnine.co.il",
    "cloudns.co.il",
    "cloudpc.co.il",
    "cloudrive.co.il",
    "clouds-machine.co.il",
    "clouds.co.il",
    "cloudsolutions.co.il",
    "cloudstation.co.il",
    "cloudup.co.il",
    "cloudway.co.il",
    "cloudyourcar.co.il",
    "cloudzone.co.il",
    "clown.co.il",
    "clowns.co.il",
    "clowns101.co.il",
    "clrs.co.il",
    "clsi.org.il",
    "clt.co.il",
    "club-air.co.il",
    "club-car.co.il",
    "club-giraffe.co.il",
    "club-list.co.il",
    "club-med.co.il",
    "club-ramon.co.il",
    "club100plus.co.il",
    "club365.co.il",
    "club50.co.il",
    "clubart.co.il",
    "clubber.co.il",
    "clubbers.co.il",
    "clubbreitlingisrael.co.il",
    "clubcar.co.il",
    "clubdeal.co.il",
    "clubforu.co.il",
    "clubim.co.il",
    "clubister.co.il",
    "clubjudge.co.il",
    "clublife.co.il",
    "clubmail.co.il",
    "clubmed.co.il",
    "clubmedjobs.co.il",
    "cluboard.co.il",
    "clubpenguin.co.il",
    "clubpic.co.il",
    "clubramon.co.il",
    "clubus.co.il",
    "clulot.co.il",
    "clutch.co.il",
    "clymenepetroleum.co.il",
    "cm-yk.co.il",
    "cm4plm.co.il",
    "cma.co.il",
    "cma.org.il",
    "cmall.co.il",
    "cman.co.il",
    "cmanagement.co.il",
    "cmat.co.il",
    "cmb.co.il",
    "cmcltd.co.il",
    "cmd-bstyle.co.il",
    "cme.co.il",
    "cmedia.co.il",
    "cmedica.co.il",
    "cmg.co.il",
    "cmggroup.co.il",
    "cmh.co.il",
    "cmichael.co.il",
    "cminds.co.il",
    "cmj.co.il",
    "cml.org.il",
    "cmlaw.co.il",
    "cmm.co.il",
    "cmmi.co.il",
    "cmo.co.il",
    "cmodels.co.il",
    "cmoney.co.il",
    "cmore.co.il",
    "cmos.co.il",
    "cmotors.co.il",
    "cmoving.co.il",
    "cmple.co.il",
    "cmpower.co.il",
    "cmr.co.il",
    "cmrealestate.co.il",
    "cms.co.il",
    "cms.org.il",
    "cms1.co.il",
    "cmt.co.il",
    "cmtelecom.co.il",
    "cmw.co.il",
    "cmyk.co.il",
    "cmypic.co.il",
    "cna.co.il",
    "cna.org.il",
    "cnaan-village.co.il",
    "cnaan.org.il",
    "cnaanc.co.il",
    "cnb.co.il",
    "cnbc.co.il",
    "cnbh.co.il",
    "cnc-laser.co.il",
    "cnc21.co.il",
    "cncard.co.il",
    "cnccenter.co.il",
    "cncom.co.il",
    "cncparts.co.il",
    "cncservice.co.il",
    "cnd.co.il",
    "cndpremium.co.il",
    "cnet.co.il",
    "cnews.co.il",
    "cnext.co.il",
    "cng.co.il",
    "cni.co.il",
    "cnk.co.il",
    "cnl.co.il",
    "cnl.org.il",
    "cnn.co.il",
    "cnp.co.il",
    "cntd.co.il",
    "cnv.co.il",
    "co-bags.co.il",
    "co-creation.co.il",
    "co-il.co.il",
    "co-motion.co.il",
    "co-op.co.il",
    "co-operative.co.il",
    "co-sleeping.co.il",
    "co2000.co.il",
    "coa.co.il",
    "coach-abilities.co.il",
    "coach-art.co.il",
    "coach-info.co.il",
    "coach-isron.co.il",
    "coach-it.co.il",
    "coach-n.co.il",
    "coach-one.co.il",
    "coach-u.co.il",
    "coach-up.co.il",
    "coach.co.il",
    "coach1.co.il",
    "coach2success.co.il",
    "coach4adhd.co.il",
    "coach4balance.co.il",
    "coach4health.co.il",
    "coach4love.co.il",
    "coach4parents.co.il",
    "coachcard.co.il",
    "coachchen.co.il",
    "coacheng.co.il",
    "coacher.co.il",
    "coacher4u.co.il",
    "coacherim.co.il",
    "coachforlife.co.il",
    "coachguide.co.il",
    "coachim.co.il",
    "coachindex.co.il",
    "coaching-center.co.il",
    "coaching-nlp.co.il",
    "coaching.org.il",
    "coaching4love.co.il",
    "coachingacademy.co.il",
    "coachinginteractive.co.il",
    "coachingis4me.co.il",
    "coachingnlp.co.il",
    "coachingpsychology.co.il",
    "coachingu.co.il",
    "coachjobs.co.il",
    "coachmajor.co.il",
    "coachme.co.il",
    "coachmeir.co.il",
    "coachpedia.co.il",
    "coachr.co.il",
    "coachtal.co.il",
    "coachteam.co.il",
    "coachvision.co.il",
    "coachway.co.il",
    "coachyou.co.il",
    "coactive.co.il",
    "coal-ash.co.il",
    "coamar.co.il",
    "coamis.org",
    "coapp.co.il",
    "coarch.co.il",
    "coast.co.il",
    "coast.org.il",
    "coat.co.il",
    "coating.co.il",
    "coatings.co.il",
    "cob.co.il",
    "cobalt.co.il",
    "cobb.co.il",
    "cobi.org.il",
    "cobin.co.il",
    "cobiz.co.il",
    "cobos.co.il",
    "cobra-bordo.co.il",
    "cobra.co.il",
    "cobratoys.co.il",
    "cobweb.co.il",
    "coca.co.il",
    "cocacola.co.il",
    "cocacolaopen.co.il",
    "coccole.co.il",
    "cochav.co.il",
    "cochavi.co.il",
    "cochin.co.il",
    "cochin.org.il",
    "coci.co.il",
    "cocinero.co.il",
    "cockpit4u.co.il",
    "cockpitrm.co.il",
    "cockroach.co.il",
    "cocktailart.co.il",
    "cocktailbar.co.il",
    "cocktailroom.co.il",
    "cocktails.co.il",
    "coclico.co.il",
    "cocoachic.co.il",
    "cocobar.co.il",
    "cocohut.co.il",
    "cocoloco.co.il",
    "coconut.co.il",
    "cocoon.co.il",
    "cocpa.co.il",
    "cod.co.il",
    "coda.co.il",
    "codart.co.il",
    "coday.co.il",
    "coddex.co.il",
    "code.co.il",
    "code4u.co.il",
    "codeacademy.co.il",
    "codeanan.co.il",
    "codeart.co.il",
    "codebase.co.il",
    "codeblue.org.il",
    "codecs.co.il",
    "codedesign.co.il",
    "codeesh.co.il",
    "codefrog.co.il",
    "codeguru.co.il",
    "codeheart.co.il",
    "codek.co.il",
    "codelovers.co.il",
    "codemark.co.il",
    "codemaster.co.il",
    "codemonkey.co.il",
    "codepatuach.co.il",
    "coder.co.il",
    "codered.co.il",
    "coders.co.il",
    "codesigner.co.il",
    "codesnippet.co.il",
    "codesnippets.co.il",
    "codestar.co.il",
    "codetwo.co.il",
    "codevalue.co.il",
    "codevision.co.il",
    "codexblog.co.il",
    "codeya.co.il",
    "codice.co.il",
    "codik.co.il",
    "codim.co.il",
    "coding.co.il",
    "codingpsd.co.il",
    "codo.co.il",
    "coexnet.org.il",
    "cof.co.il",
    "coface.co.il",
    "cofek.org.il",
    "coffeacocoa.co.il",
    "coffee-bike.co.il",
    "coffee-center.co.il",
    "coffee-deals.co.il",
    "coffee-express.co.il",
    "coffee-house.co.il",
    "coffee-market.co.il",
    "coffee-print.co.il",
    "coffee-shop.co.il",
    "coffee-sommer.co.il",
    "coffee-t.co.il",
    "coffee-table.co.il",
    "coffee-to-go.co.il",
    "coffee.org.il",
    "coffee10.co.il",
    "coffee4u.co.il",
    "coffeeacademy.co.il",
    "coffeeandco.co.il",
    "coffeeapp.co.il",
    "coffeeart.co.il",
    "coffeebar.co.il",
    "coffeebox.co.il",
    "coffeecenter.co.il",
    "coffeecompany.co.il",
    "coffeeexpress.co.il",
    "coffeeguide.co.il",
    "coffeemachines.co.il",
    "coffeeoptions.co.il",
    "coffeephone.co.il",
    "coffeeplus.co.il",
    "coffeepoint.co.il",
    "coffeepro.co.il",
    "coffeeshop.co.il",
    "coffeeshow.co.il",
    "coffeestation.co.il",
    "coffeetea.co.il",
    "coffeetime.co.il",
    "coffeetimeshop.co.il",
    "coffeex.co.il",
    "coffetime.co.il",
    "coffice.co.il",
    "coffie-mechine.co.il",
    "coffor.co.il",
    "cogia.co.il",
    "cogisen.co.il",
    "cogitos.co.il",
    "cogmetal.co.il",
    "cognetica.co.il",
    "cognicity.co.il",
    "cognit.co.il",
    "cognition.co.il",
    "cognito.co.il",
    "cogo.co.il",
    "cohania.co.il",
    "cohanim.co.il",
    "cohav-shavit.co.il",
    "cohav.co.il",
    "cohavhakor.co.il",
    "cohen-agency.co.il",
    "cohen-bug.co.il",
    "cohen-ins.co.il",
    "cohen.co.il",
    "cohen1.co.il",
    "cohenadv.co.il",
    "cohenandsteers.co.il",
    "cohenb.co.il",
    "cohenbrothers.co.il",
    "coheneli.co.il",
    "cohenet.co.il",
    "cohenkitchens.co.il",
    "cohenlevi.co.il",
    "cohenmd.co.il",
    "cohenmetals.co.il",
    "cohenmoshe.co.il",
    "cohens.org.il",
    "cohensweb.co.il",
    "cohenyair.co.il",
    "cohenyaniv.co.il",
    "coherent.co.il",
    "cohi.co.il",
    "coi.co.il",
    "coifman.co.il",
    "coil.co.il",
    "coinamatic.co.il",
    "coincenter.co.il",
    "coincommerce.co.il",
    "coinews.co.il",
    "cointelegraph.co.il",
    "coinz.co.il",
    "coka.co.il",
    "col-or.co.il",
    "col.co.il",
    "col.org.il",
    "cola.co.il",
    "colav.co.il",
    "colaw.co.il",
    "colaz.co.il",
    "colbi.co.il",
    "colbonet.co.il",
    "colborok.co.il",
    "coldair.co.il",
    "coldco.co.il",
    "colder.co.il",
    "coldfusion.co.il",
    "coldp.co.il",
    "coldpoint.co.il",
    "coldrooms.co.il",
    "coldwater.co.il",
    "colel.co.il",
    "colette.co.il",
    "coletteavital.org.il",
    "coletto.co.il",
    "colgatesimplywhite.co.il",
    "colife.co.il",
    "colins.co.il",
    "colint.co.il",
    "collaboration.co.il",
    "collaborativedivorce.co.il",
    "collage.co.il",
    "collage.org.il",
    "collageart.co.il",
    "collagena.co.il",
    "collagenplus.co.il",
    "collect.co.il",
    "collectionart.co.il",
    "collectiondesign.co.il",
    "collections.co.il",
    "collective.co.il",
    "collectiveimpact.co.il",
    "collector.co.il",
    "collega.co.il",
    "college-of-music.co.il",
    "college.org.il",
    "college4u.co.il",
    "collegeaccounting.co.il",
    "collegef.co.il",
    "collegeofphotography.co.il",
]
